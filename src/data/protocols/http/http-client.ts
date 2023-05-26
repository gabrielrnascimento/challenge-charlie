export type HttpClientMethod = 'get';

export type HttpRequest<P = any, B = any, H = any> = {
  url: string,
  params?: P,
  method: HttpClientMethod,
  body?: B,
  headers?:H
};

export enum HttpStatus {
  ok = 200,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<R = any> = {
  statusCode: HttpStatus,
  body: R
};

export interface HttpClient<R = any> {
  request: (params: HttpRequest) => Promise<HttpResponse<R>>
}