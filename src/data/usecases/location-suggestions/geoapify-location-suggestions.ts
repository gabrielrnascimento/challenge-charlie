import { type HttpClient } from '@/data/protocols/http';

export class GeoapifyLocationSuggestions {
  readonly url: string = process.env.GEOAPIFY_API_URL as string;
  readonly key: string = process.env.GEOAPIFY_API_KEY as string;
  params!: any;

  constructor(private readonly httpClient: HttpClient) {}

  load (term: string): void{
    this.params = {
      text: term,
      apiKey: this.key,
      lang: 'pt'
    };

    this.httpClient.request({
      method: 'get',
      url: this.url,
      params: this.params,
    });
  }
}