import { faker } from '@faker-js/faker';

import { HttpStatus } from '@/data/protocols/http';
import { HttpClientSpy, mockHttpClientGeoapifyLocationsResponse } from '@/data/test';
import { UnauthorizedError, UnexpectedError } from '@/domain/errors';

import { GeoapifyLocationSuggestions } from './geoapify-location-suggestions';

type SutTypes = {
  sut: GeoapifyLocationSuggestions,
  httpClientSpy: HttpClientSpy,
  searchTerm: string
};

const makeSut = (): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new GeoapifyLocationSuggestions(httpClientSpy);
  const searchTerm = faker.address.cityName();
  return {
    sut,
    httpClientSpy,
    searchTerm
  };
};

describe('GeoapifyLocationSuggestions', () => {
  test('should call HttpClient with correct data', () => {
    const {
      sut,
      httpClientSpy,
      searchTerm
    } = makeSut();

    httpClientSpy.response.statusCode = HttpStatus.ok;

    sut.load(searchTerm);

    const {
      method,
      url,
      params
    } = httpClientSpy;

    expect(method).toBe('get');
    expect(url).toBe(sut.url);
    expect(params).toBe(sut.params);
  });

  test('should throw UnexpectedError on 400', async () => {
    const {
      sut,
      httpClientSpy,
      searchTerm
    } = makeSut();

    httpClientSpy.response.statusCode = HttpStatus.badRequest;
    const response = sut.load(searchTerm);
    await expect(response).rejects.toThrow(new UnexpectedError(UnexpectedError.MESSAGE));
  });

  test('should throw UnauthorizedError on 401', async () => {
    const {
      sut,
      httpClientSpy,
      searchTerm
    } = makeSut();

    httpClientSpy.response.statusCode = HttpStatus.unauthorized;
    const response = sut.load(searchTerm);
    await expect(response).rejects.toThrow(new UnauthorizedError(UnauthorizedError.MESSAGE));
  });

  test('should throw UnexpectedError on 404', async () => {
    const {
      sut,
      httpClientSpy,
      searchTerm
    } = makeSut();

    httpClientSpy.response.statusCode = HttpStatus.notFound;
    const response = sut.load(searchTerm);
    await expect(response).rejects.toThrow(new UnexpectedError(UnexpectedError.MESSAGE));
  });

  test('should throw UnexpectedError on 500', async () => {
    const {
      sut,
      httpClientSpy,
      searchTerm
    } = makeSut();

    httpClientSpy.response.statusCode = HttpStatus.serverError;
    const response = sut.load(searchTerm);
    await expect(response).rejects.toThrow(new UnexpectedError(UnexpectedError.MESSAGE));
  });

  test('should return location suggestions on 200', async () => {
    const {
      sut,
      httpClientSpy,
      searchTerm
    } = makeSut();

    const mockedLocationSuggestionsResponse = mockHttpClientGeoapifyLocationsResponse();
    httpClientSpy.response = mockedLocationSuggestionsResponse;

    const response = await sut.load(searchTerm);

    expect(response).toBe(mockedLocationSuggestionsResponse);
  });
});
