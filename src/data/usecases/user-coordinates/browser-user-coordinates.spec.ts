import { mockErrorGeolocation, mockSuccessGeolocation } from '@/data/test';
import { UserDeniedGeolocationError } from '@/domain/errors/geolocation';

import { BrowserUserCoordinates } from './browser-user-coordinates';

describe('BrowserUserCoordinates', () => {
  test('should return UserCoordinates.Model on success', async () => {
    const { mockPosition } = mockSuccessGeolocation();
    const browserUserCoordinates = new BrowserUserCoordinates();
    const response = await browserUserCoordinates.get();
    const { coords } = mockPosition;
    const { latitude, longitude } = coords;
    const expectedResponse = {
      latitude,
      longitude
    };
    expect(response).toStrictEqual(expectedResponse);
  });

  test('should return GeolocationPositionError on error', async () => {
    mockErrorGeolocation();
    const browserUserCoordinates = new BrowserUserCoordinates();
    const response = browserUserCoordinates.get();
    await expect(response).rejects.toThrow(new UserDeniedGeolocationError());
  });
});