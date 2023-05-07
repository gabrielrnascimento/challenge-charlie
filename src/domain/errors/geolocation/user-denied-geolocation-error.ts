export class UserDeniedGeolocationError extends Error {
  constructor() {
    super('User denied geolocation sharing');
    this.name = 'UserDeniedGeolocationError';
  }
}