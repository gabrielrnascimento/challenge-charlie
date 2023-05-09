import { faker } from '@faker-js/faker';

export const mockSuccessGeolocationPosition = (): GeolocationPosition => ({
  coords: {
    latitude: parseFloat(faker.address.latitude()),
    longitude: parseFloat(faker.address.longitude()),
    altitude: null,
    accuracy: faker.datatype.number({ min: 1, max: 100 }),
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  },
  timestamp: faker.datatype.datetime().getTime()
});

type mockGeolocationPositionResponse = {
  mockPosition: GeolocationPosition
};

// https://stackoverflow.com/a/51829561 https://stackoverflow.com/a/67019816
export const mockSuccessGeolocation = (): mockGeolocationPositionResponse => {
  const getCurrentPositionMock = jest.fn();
  const mockPosition = mockSuccessGeolocationPosition();
  const geolocation = {
    getCurrentPosition: getCurrentPositionMock.mockImplementation((location) => {
      Promise.resolve(location(mockPosition));
    })
  };
  Object.defineProperty(global.navigator, 'geolocation', {
    value: geolocation,
    configurable: true
  });
  return {
    mockPosition,
  };
};

export type GeolocationPositionError = {
  code: 1 | 2 | 3,
  message: string
};

export const mockErrorGeolocationPosition = (): GeolocationPositionError => ({
  code: 1,
  message: 'User denied Geolocation',
});

type mockGeolocationPositionErrorResponse = {
  mockError: GeolocationPositionError
};

export const mockErrorGeolocation = (mockError: GeolocationPositionError = mockErrorGeolocationPosition()): mockGeolocationPositionErrorResponse => {
  const getCurrentPositionMock = jest.fn((successCallback, errorCallback) => {
    errorCallback(mockError);
  });
  const geolocation = {
    getCurrentPosition: getCurrentPositionMock
  };
  Object.defineProperty(global.navigator, 'geolocation', {
    value: geolocation,
    configurable: true
  });
  return {
    mockError
  };
};

