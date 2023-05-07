import { UserDeniedGeolocationError } from '@/domain/errors/geolocation';
import { type UserCoordinates } from '@/domain/usecases/user-coordinates';

type geolocationResponse = GeolocationPosition | GeolocationPositionError;
export class BrowserUserCoordinates implements UserCoordinates{
  async get (): Promise<UserCoordinates.Model>{
    let userCoordinates;
    try {
      const response = await new Promise<geolocationResponse>((resolve, reject) => {
        global.navigator.geolocation.getCurrentPosition(
          (geolocation: GeolocationPosition) => {
            resolve(geolocation);
          },
          (error: GeolocationPositionError) => {
            reject(error);
          }
        );
      });
      const { coords } = response as GeolocationPosition;
      const { latitude, longitude } = coords;
      userCoordinates = {
        latitude,
        longitude
      };
    } catch (error) {
      throw new UserDeniedGeolocationError();
    }
    return {
      latitude: userCoordinates?.latitude as number,
      longitude: userCoordinates?.longitude as number
    };
  }
}
