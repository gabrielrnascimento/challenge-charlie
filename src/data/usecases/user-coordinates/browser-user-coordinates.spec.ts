import { faker } from '@faker-js/faker';

import { mockErrorGeolocation, mockErrorGeolocationPosition, mockSuccessGeolocation } from '@/data/test';
import { UserDeniedGeolocationError, UnexpectedError } from '@/domain/errors/';

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

  test('should throw UserDeniedGeolocationError if user denies location', async () => {
    mockErrorGeolocation();
    const browserUserCoordinates = new BrowserUserCoordinates();
    const response = browserUserCoordinates.get();
    await expect(response).rejects.toThrow(new UserDeniedGeolocationError());
  });

  test('should throw generic error if other error occurrs', async () => {
    const mockError = mockErrorGeolocationPosition();
    mockError.code = faker.helpers.arrayElement([ 2, 3 ]);
    mockError.message = faker.random.words();
    mockErrorGeolocation(mockError);
    const browserUserCoordinates = new BrowserUserCoordinates();
    const response = browserUserCoordinates.get();
    await expect(response).rejects.toThrow(new UnexpectedError(UnexpectedError.MESSAGE)) ;
  });
});