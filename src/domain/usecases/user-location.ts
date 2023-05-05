import { type UserLocationModel } from '@/data/models';
import { type HttpResponse } from '@/data/protocols/http';

import { type UserCoordinates } from './user-coordinates';

export interface UserLocation {
  get: (params: UserCoordinates.Model) => Promise<HttpResponse<UserLocation.Model>>
}

export namespace UserLocation {
  export type Model = UserLocationModel;
}