import axios from 'axios';

import { type HttpRequest } from '@/data/protocols/http';

export class AxiosHttpClient {
  async request (params: HttpRequest): Promise<any> {
    await axios.request(params);
    return Promise.resolve();
  }
}

