import { HttpStatus, type HttpClient } from '@/data/protocols/http';
import { UnexpectedError } from '@/domain/errors';

export class GeoapifyLocationSuggestions {
  readonly url: string = process.env.GEOAPIFY_API_URL as string;
  readonly key: string = process.env.GEOAPIFY_API_KEY as string;
  params!: any;

  constructor(private readonly httpClient: HttpClient) {}

  async load (term: string): Promise<void>{
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
      case HttpStatus.badRequest:
        throw new UnexpectedError();
      default:
    }
  }
}