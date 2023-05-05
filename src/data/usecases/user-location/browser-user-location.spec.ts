import { faker } from '@faker-js/faker';

import { type HttpResponse, HttpStatus } from '@/data/protocols/http';
import { HttpClientSpy, mockHttpClientOpenCageResponse } from '@/data/test';
import { UnexpectedError } from '@/domain/errors/http';

import { BrowserUserLocation } from './browser-user-location';

type SutTypes = {
  httpClientSpy: HttpClientSpy,
  mockResponse: HttpResponse,
  sut:BrowserUserLocation
};

const makeSut = (url: string = faker.internet.url(), params: any = faker.random.word()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new BrowserUserLocation(httpClientSpy, url, params);
  const mockResponse = mockHttpClientOpenCageResponse();
  httpClientSpy.response = mockResponse;
  return {
    httpClientSpy,
    mockResponse,
    sut
  };
};

describe('BrowserUserLocation', () => {
  test('should call HttpClient with correct data', async () => {
    const url = faker.internet.url();
    const params = faker.random.word();
    const { httpClientSpy, sut } = makeSut(url, params);
    await sut.get();
    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('get');
    expect(httpClientSpy.params).toBe(params);
  });

  test('should throw UnexpectedError on 400', async () => {
    const { httpClientSpy, sut } = makeSut();
    httpClientSpy.response.statusCode = HttpStatus.badRequest;
    const response = sut.get();
    await expect(response).rejects.toThrow(new UnexpectedError());
  });

  test('should throw UnexpectedError on 404', async () => {
    const { httpClientSpy, sut } = makeSut();
    httpClientSpy.response.statusCode = HttpStatus.notFound;
    const response = sut.get();
    await expect(response).rejects.toThrow(new UnexpectedError());
  });

  test('should throw UnexpectedError on 500', async () => {
    const { httpClientSpy, sut } = makeSut();
    httpClientSpy.response.statusCode = HttpStatus.serverError;
    const response = sut.get();
    await expect(response).rejects.toThrow(new UnexpectedError());
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