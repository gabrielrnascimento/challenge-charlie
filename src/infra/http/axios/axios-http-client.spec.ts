import { mockHttpRequest } from '@/data/test';
import { mockAxios } from '@/infra/test/mock-axios';

import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');

describe('AxiosHttpClient', () => {
  test('should call axios with correct params', async () => {
    const request = mockHttpRequest();
    const axiosHttpClient = new AxiosHttpClient();
    const mockedAxios = mockAxios();
    await axiosHttpClient.request(request);
    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      method: request.method,
      body: request.body,
      headers: request.headers
    });
  });
});
