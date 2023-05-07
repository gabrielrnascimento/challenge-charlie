import { HttpStatus, type HttpClient, type HttpResponse } from '@/data/protocols/http';
import { UnexpectedError } from '@/domain/errors/http';
import { type UserCoordinates } from '@/domain/usecases/user-coordinates';
import { type UserLocation } from '@/domain/usecases/user-location';

export class OpenCageUserLocation implements UserLocation {
  readonly url: string = process.env.OPEN_CAGE_API_URL as string;
  readonly key: string = process.env.OPEN_CAGE_API_KEY as string;
  private latitude!: string;
  private longitude!: string;

  constructor(
    private readonly httpClient: HttpClient<any>,
    private readonly coords: UserCoordinates.Model
  ) {
    const { latitude, longitude } = this.coords;
    this.latitude = latitude.toString();
    this.longitude = longitude.toString();
  }

  async get (): Promise<HttpResponse<UserLocation.Model>> {
    const response = await this.httpClient.request({
      url: this.url,
      params: {
        key: this.key,
        q: `${this.latitude},${this.longitude}`
      },
      method: 'get'
    });
    switch (response.statusCode) {
      case HttpStatus.ok:{
        const [ { components: location } ] = response.body.results;
        const locationData = {
          city: location.city,
          state: location.state,
          country: location.country
        };
        return {
          statusCode: response.statusCode,
          body: locationData
        };
      }
      default:
        throw new UnexpectedError();
    }
  }
}