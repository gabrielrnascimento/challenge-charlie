type geolocationResponse = GeolocationPosition | GeolocationPositionError;

export class BrowserUserCoordinates {
  async get (): Promise<geolocationResponse>{
    return new Promise<geolocationResponse>((resolve, reject) => {
      global.navigator.geolocation.getCurrentPosition(
        (geolocation: GeolocationPosition) => {
          resolve(geolocation);
        },
        (error: GeolocationPositionError) => {
          reject(error);
        }
      );
    });
  }
}
