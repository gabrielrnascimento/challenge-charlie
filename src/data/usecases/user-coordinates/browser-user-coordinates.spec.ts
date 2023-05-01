import { mockErrorGeolocation, mockSuccessGeolocation } from '@/data/test';

import { BrowserUserCoordinates } from './browser-user-coordinates';

describe('BrowserUserCoordinates', () => {
  test('should return UserCoordinates.Model on success', async () => {
    const { mockPosition } = mockSuccessGeolocation();
    const browserUserCoordinates = new BrowserUserCoordinates();
    const response = await browserUserCoordinates.get();
    const { coords } = mockPosition;
    const { latitude, longitude } = coords;
    const expectedResponse = {
      coords: {
        latitude,
        longitude
      }
    };
    expect(response).toStrictEqual(expectedResponse);
  });

  test('should return GeolocationPositionError on error', async () => {
    const { mockPosition } = mockErrorGeolocation();
    const browserUserCoordinates = new BrowserUserCoordinates();
    const response = browserUserCoordinates.get();
    await expect(response).rejects.toEqual(mockPosition);
  });
});