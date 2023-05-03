import { type UserLocationModel } from '@/data/models';

import { type UserCoordinates } from './user-coordinates';

export interface UserLocation {
  get: (params: UserCoordinates.Model) => Promise<UserLocation.Model>
}

export namespace UserLocation {
  export type Model = UserLocationModel;
}