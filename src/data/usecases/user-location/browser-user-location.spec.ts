import { faker } from '@faker-js/faker';

import { HttpClientSpy } from '@/data/test';

import { BrowserUserLocation } from './browser-user-location';

type SutTypes = {
  httpClientSpy: HttpClientSpy,
  sut: BrowserUserLocation
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new BrowserUserLocation(httpClientSpy, url);
  return {
    httpClientSpy,
    sut
  };
};

describe('BrowserUserLocation', () => {
  test('should call HttpClient with correct url', async () => {
    const url = faker.internet.url();
    const { httpClientSpy, sut } = makeSut(url);
    await sut.get();
    expect(httpClientSpy.url).toBe(url);
  });
});