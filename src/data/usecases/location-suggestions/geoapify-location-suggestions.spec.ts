import { faker } from '@faker-js/faker';

import { HttpStatus } from '@/data/protocols/http';
import { HttpClientSpy } from '@/data/test';
import { UnexpectedError } from '@/domain/errors';

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
    await expect(response).rejects.toThrow(new UnexpectedError());
  });
});
