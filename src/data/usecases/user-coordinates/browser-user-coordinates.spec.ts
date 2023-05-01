import { mockErrorGeolocation, mockSuccessGeolocation } from '@/data/test';

import { BrowserUserCoordinates } from './browser-user-coordinates';

describe('BrowserUserCoordinates', () => {
  test('should retrieve GeolocationPosition on success', async () => {
    const { mockPosition } = mockSuccessGeolocation();
    const browserUserCoordinates = new BrowserUserCoordinates();
    const response = await browserUserCoordinates.get();
    expect(response).toBe(mockPosition);
  });

  test('should retrieve GeolocationPositionError on error', async () => {
    const { mockPosition } = mockErrorGeolocation();
    const browserUserCoordinates = new BrowserUserCoordinates();
    const response = browserUserCoordinates.get();
    await expect(response).rejects.toEqual(mockPosition);
  });
});