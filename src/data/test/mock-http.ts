import { faker } from '@faker-js/faker';

import { type HttpRequest, type HttpClient, type HttpResponse } from '@/data/protocols/http';

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  params: faker.random.word(),
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
  params!: any;
  method!: string;
  response: HttpResponse<any> = mockHttpResponse();

  request (data: HttpRequest): Promise<HttpResponse<any>> {
    this.url = data.url;
    this.params = data.params;
    this.method = data.method;
    return Promise.resolve(this.response);
  }
}