import { HttpStatus, type HttpClient, type HttpResponse } from '@/data/protocols/http';
import { UnexpectedError } from '@/domain/errors/http';
import { type UserLocation } from '@/domain/usecases/user-location';

export class BrowserUserLocation {
  constructor(
    private readonly httpClient: HttpClient<any>,
    private readonly url: string,
    private readonly params: any
  ) {}

  async get (): Promise<HttpResponse<UserLocation.Model>> {
    const response = await this.httpClient.request({
      url: this.url,
      params: this.params,
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