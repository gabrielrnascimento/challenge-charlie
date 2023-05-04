import type axios from 'axios';

import { type HttpRequest } from '@/data/protocols/http';
import { mockHttpRequest } from '@/data/test';
import { mockAxios, mockHttpResponse } from '@/infra/test/mock-axios';

import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient,
  mockedAxios: jest.Mocked<typeof axios>
  request: HttpRequest
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const request = mockHttpRequest();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
    request
  };
};

describe('AxiosHttpClient', () => {
  test('should call axios with correct params', async () => {
    const {
      sut,
      mockedAxios,
      request
    } = makeSut();
    await sut.request(request);
    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      method: request.method,
      body: request.body,
      headers: request.headers
    });
  });

  test('should return correct response', async () => {
    const {
      sut,
      mockedAxios,
      request
    } = makeSut();
    const mockResponse = mockHttpResponse();
    mockedAxios.request.mockResolvedValue(mockResponse);
    const response = await sut.request(request);
    expect(response).toBe(mockResponse);
  });
});
