import { faker } from '@faker-js/faker';

import { HttpClientSpy } from '@/data/test';

import { GeoapifyLocationSuggestions } from './geoapify-location-suggestions';

type SutTypes = {
  sut: GeoapifyLocationSuggestions,
  httpClientSpy: HttpClientSpy
};

const makeSut = (): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new GeoapifyLocationSuggestions(httpClientSpy);
  return {
    sut,
    httpClientSpy
  };
};

describe('GeoapifyLocationSuggestions', () => {
  test('should call HttpClient with correct data', () => {
    const { sut, httpClientSpy } = makeSut();
    const searchTerm = faker.address.cityName();
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
});
