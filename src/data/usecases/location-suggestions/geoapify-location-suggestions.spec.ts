import { faker } from '@faker-js/faker';

import { HttpClientSpy } from '@/data/test';

import { GeoapifyLocationSuggestions } from './geoapify-location-suggestions';



describe('GeoapifyLocationSuggestions', () => {
  test('should call HttpClient with correct data', () => {
    const httpClientSpy = new HttpClientSpy();
    const geoapifyLocationSuggestion = new GeoapifyLocationSuggestions(httpClientSpy);
    const searchTerm = faker.address.cityName();
    geoapifyLocationSuggestion.load(searchTerm);

    const {
      method,
      url,
      params
    } = httpClientSpy;

    expect(method).toBe('get');
    expect(url).toBe(geoapifyLocationSuggestion.url);
    expect(params).toBe(geoapifyLocationSuggestion.params);
  });
});
