import { type UserLocationModel } from '@/data/models';
import { type HttpResponse } from '@/data/protocols/http';

export interface UserLocation {
  get: () => Promise<HttpResponse<UserLocation.Model>>
}

export namespace UserLocation {
  export type Model = UserLocationModel;
}