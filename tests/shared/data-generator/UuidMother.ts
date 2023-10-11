import { faker } from '@faker-js/faker';

import { Uuid } from '../../../src/shared-d/domain-d/value-objects/Uuid';

export class UuidMother {
  static random(): Uuid {
    return new Uuid(faker.string.uuid());
  }
}
