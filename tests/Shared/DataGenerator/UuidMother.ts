import * as faker from 'faker';

export class UuidMother {
  static random(): string {
    return faker.datatype.uuid();
  }
}
