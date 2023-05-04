import type axios from 'axios';

import { mockHttpRequest } from '@/data/test';
import { mockAxios, mockHttpResponse } from '@/infra/test/mock-axios';

import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient,
  mockedAxios: jest.Mocked<typeof axios>
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios
  };
};

describe('AxiosHttpClient', () => {
  test('should call axios with correct params', async () => {
    const { sut, mockedAxios } = makeSut();
    const request = mockHttpRequest();
    await sut.request(request);
    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      method: request.method,
      body: request.body,
      headers: request.headers
    });
  });

  test('should return correct response', async () => {
    const { sut, mockedAxios } = makeSut();
    const request = mockHttpRequest();
    const mockResponse = mockHttpResponse();
    mockedAxios.request.mockResolvedValue(mockResponse);
    const response = await sut.request(request);
    expect(response).toBe(mockResponse);
  });
});
