import { faker } from '@faker-js/faker';

import { type HttpRequest, type HttpClient, type HttpResponse } from '../protocols/http';

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: 'get'
});

export const mockHttpResponse = (): HttpResponse<any> => ({
  statusCode: 200,
  body: {
    data: {
      lorem: faker.lorem.word(),
      ipsum: faker.lorem.word(),
    }
  }
});

export class HttpClientSpy implements HttpClient<any> {
  url!: string;
  method!: string;
  response: HttpResponse<any> = mockHttpResponse();

  request (params: HttpRequest): Promise<HttpResponse<any>> {
    this.url = params.url;
    this.method = params.method;
    return Promise.resolve(this.response);
  }
}