import { faker } from '@faker-js/faker';

import { type HttpResponse, HttpStatus } from '@/data/protocols/http';
import { HttpClientSpy, mockHttpClientOpenCageResponse } from '@/data/test';
import { mockUserCoordinates } from '@/data/test/mock-user-coordinates';
import { UnexpectedError } from '@/domain/errors/';
import { type UserCoordinates } from '@/domain/usecases/user-coordinates';

import { OpenCageUserLocation } from './open-cage-user-location';


type SutTypes = {
  httpClientSpy: HttpClientSpy,
  mockResponse: HttpResponse,
  sut: OpenCageUserLocation
};

const makeSut = (coords: UserCoordinates.Model= mockUserCoordinates()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new OpenCageUserLocation(httpClientSpy, coords);
  const mockResponse = mockHttpClientOpenCageResponse();
  httpClientSpy.response = mockResponse;
  return {
    httpClientSpy,
    mockResponse,
    sut
  };
};

describe('OpenCageUserLocation', () => {
  test('should call HttpClient with correct data', async () => {
    jest.resetModules();
    process.env.OPEN_CAGE_API_KEY = faker.datatype.uuid();
    const coords = mockUserCoordinates();
    const { httpClientSpy, sut } = makeSut(coords);
    await sut.get();
    const {
      url,
      method,
      params
    } = httpClientSpy;
    const { key, q } = params;
    expect(url).toBe(sut.url);
    expect(method).toBe('get');
    expect(key).toBe(process.env.OPEN_CAGE_API_KEY);
    expect(q).toBe(`${coords.latitude},${coords.longitude}`);
  });

  test('should throw UnexpectedError on 400', async () => {
    const { httpClientSpy, sut } = makeSut();
    httpClientSpy.response.statusCode = HttpStatus.badRequest;
    const response = sut.get();
    await expect(response).rejects.toThrow(new UnexpectedError(UnexpectedError.MESSAGE));
  });

  test('should throw UnexpectedError on 404', async () => {
    const { httpClientSpy, sut } = makeSut();
    httpClientSpy.response.statusCode = HttpStatus.notFound;
    const response = sut.get();
    await expect(response).rejects.toThrow(new UnexpectedError(UnexpectedError.MESSAGE));
  });

  test('should throw UnexpectedError on 500', async () => {
    const { httpClientSpy, sut } = makeSut();
    httpClientSpy.response.statusCode = HttpStatus.serverError;
    const response = sut.get();
    await expect(response).rejects.toThrow(new UnexpectedError(UnexpectedError.MESSAGE));
  });

  test('should return UserLocation.Model on success', async () => {
    const {
      httpClientSpy,
      mockResponse,
      sut
    } = makeSut();

    httpClientSpy.response = mockResponse;
    const [ { components: mockLocationResponse } ] = mockResponse.body.results;
    const response = await sut.get();

    expect(response.statusCode).toBe(mockResponse.statusCode);
    expect(response.body.city).toBe(mockLocationResponse.city);
    expect(response.body.state).toBe(mockLocationResponse.state);
    expect(response.body.country).toBe(mockLocationResponse.country);
  });
});