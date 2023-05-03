import { type UserCoordinatesModel } from '@/data/models/user-coordinates-model';

export interface UserCoordinates {
  get: () => Promise<UserCoordinates.Model>
}

export namespace UserCoordinates {
  export type Model = UserCoordinatesModel;
}