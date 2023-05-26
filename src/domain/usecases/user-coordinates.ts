import { type CoordinatesModel } from '@/data/models/coordinates-model';

export interface UserCoordinates {
  get: () => Promise<UserCoordinates.Model>
}

export namespace UserCoordinates {
  export type Model = CoordinatesModel;
}