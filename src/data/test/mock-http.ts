import { faker } from '@faker-js/faker';

import { type HttpRequest, type HttpClient, type HttpResponse } from '@/data/protocols/http';

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: 'get',
  body: faker.random.words,
  headers: faker.random.word
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
  response: HttpResponse<any> = mockHttpResponse();

  request (params: HttpRequest): Promise<HttpResponse<any>> {
    this.url = params.url;
    this.method = params.method;
    return Promise.resolve(this.response);
  }
}