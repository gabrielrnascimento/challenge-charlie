import { faker } from '@faker-js/faker';

import { type HttpRequest, type HttpClient, type HttpResponse } from '../protocols/http';

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: 'get'
});

export const mockHttpResponse = (): HttpResponse<any> => ({
  statusCode: faker.helpers.arrayElement([ 200, 400, 404, 500 ]),
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

  request (params: HttpRequest): Promise<HttpResponse<any>> {
    this.url = params.url;
    this.method = params.method;
    return Promise.resolve(mockHttpResponse());
  }
}