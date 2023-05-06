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
    mockedAxios,
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
      data: request.body,
      headers: request.headers
    });
  });

  test('should return correct response if axios promise resolves', async () => {
    const { sut, mockedAxios } = makeSut();
    mockedAxios.request.mockResolvedValue(mockHttpResponse());
    const request = mockHttpRequest();
    const httpResponse = await sut.request(request);
    const axiosResponse = await mockedAxios.request.mock.results[0].value;
    expect(httpResponse.statusCode).toBe(axiosResponse.status);
    expect(httpResponse.body).toBe(axiosResponse.data);
  });

  test('should return correct error if axios promise rejects', async () => {
    const { sut, mockedAxios } = makeSut();
    const mockResponse = mockHttpResponse();

    mockedAxios.request.mockRejectedValueOnce({
      response: mockResponse
    });

    const promise = await sut.request(mockHttpRequest());
    expect(promise.statusCode).toBe(mockResponse.status);
    expect(promise.body).toBe(mockResponse.data);
  });
});
