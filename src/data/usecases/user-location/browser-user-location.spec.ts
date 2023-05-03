import { faker } from '@faker-js/faker';

import { HttpClientSpy } from '@/data/test';

import { BrowserUserLocation } from './browser-user-location';

describe('BrowserUserLocation', () => {
  test('should call HttpClient with correct url', async () => {
    const httpClientSpy = new HttpClientSpy();
    const url = faker.internet.url();
    const browserUserLocation = new BrowserUserLocation(httpClientSpy, url);
    await browserUserLocation.get();
    expect(httpClientSpy.url).toBe(url);
  });
});