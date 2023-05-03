import { HttpStatus, type HttpClient } from '@/data/protocols/http';
import { UnexpectedError } from '@/domain/errors/http';

export class BrowserUserLocation {
  constructor(
    private readonly httpClient: HttpClient<any>,
    private readonly url: string
  ) {}

  async get (): Promise<void> {
    const response = await this.httpClient.request({ url: this.url, method: 'get' });
    switch (response.statusCode) {
      case HttpStatus.badRequest:
        throw new UnexpectedError();
      case HttpStatus.notFound:
        throw new UnexpectedError();
      case HttpStatus.serverError:
        throw new UnexpectedError();
      default:
    }
  }
}