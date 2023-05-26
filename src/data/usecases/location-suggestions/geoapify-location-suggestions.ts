import { HttpStatus, type HttpClient, type HttpResponse } from '@/data/protocols/http';
import { UnauthorizedError, UnexpectedError } from '@/domain/errors';
import { type LocationSuggestions } from '@/domain/usecases/location-suggestions';

export class GeoapifyLocationSuggestions implements LocationSuggestions {
  readonly url: string = process.env.GEOAPIFY_API_URL as string;
  readonly key: string = process.env.GEOAPIFY_API_KEY as string;
  params!: any;

  constructor(private readonly httpClient: HttpClient) {}

  async load (term: LocationSuggestions.Params): Promise<HttpResponse<LocationSuggestions.Model>>{
    this.params = {
      text: term,
      apiKey: this.key,
      lang: 'pt'
    };

    const response = await this.httpClient.request({
      method: 'get',
      url: this.url,
      params: this.params,
    });

    switch (response.statusCode) {
      case HttpStatus.ok:
        return response;
      case HttpStatus.unauthorized:
        throw new UnauthorizedError(UnauthorizedError.MESSAGE);
      default:
        throw new UnexpectedError(UnexpectedError.MESSAGE);
    }
  }
}