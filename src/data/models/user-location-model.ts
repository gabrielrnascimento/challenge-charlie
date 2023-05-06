import { type UserCoordinates } from '@/domain/usecases/user-coordinates';

export type UserLocationModel = {
  city: string,
  state: string,
  country: string
};

export type OpenCageParams = {
  key: string,
  coords: UserCoordinates.Model
};