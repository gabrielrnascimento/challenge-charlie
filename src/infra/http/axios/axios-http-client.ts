import axios, { type AxiosResponse } from 'axios';

import { type HttpResponse, type HttpClient, type HttpRequest } from '@/data/protocols/http';

export class AxiosHttpClient implements HttpClient<HttpResponse> {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        params: data.params,
        method: data.method,
        data: data.body,
        headers: data.headers
      }
      );
    } catch (error: any) {
      if (error.response) {
        axiosResponse = error.response;
      }
      else if (error.request) {
        axiosResponse = error.request;
      }
      else {
        axiosResponse = error.message;
      }
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    };
  }
}

