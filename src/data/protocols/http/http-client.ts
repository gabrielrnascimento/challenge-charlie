export type HttpClientMethod = 'get';

export type HttpRequest = {
  url: string,
  method: HttpClientMethod,
};

export enum HttpStatus {
  ok = 200,
  badRequest = 400,
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