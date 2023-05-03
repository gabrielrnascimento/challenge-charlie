import { type HttpClient } from '@/data/protocols/http';

export class BrowserUserLocation {
  constructor(
    private readonly httpClient: HttpClient<any>,
    private readonly url: string
  ) {}

  get (): void {
    this.httpClient.request({ url: this.url, method: 'get' });
  }
}

