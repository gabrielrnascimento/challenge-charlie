export class UserDeniedGeolocationError extends Error {
  /* istanbul ignore next */
  constructor() {
    super('User denied geolocation sharing');
    this.name = 'UserDeniedGeolocationError';
  }
}