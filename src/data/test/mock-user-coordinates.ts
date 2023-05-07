import { faker } from '@faker-js/faker';

import { type UserCoordinates } from '@/domain/usecases/user-coordinates';

export const mockUserCoordinates = ():UserCoordinates.Model => ({
  latitude: parseFloat(faker.address.latitude()),
  longitude: parseFloat(faker.address.longitude())
});