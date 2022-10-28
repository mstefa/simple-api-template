import * as faker from 'faker';

export class NameMother {
  static random(): string {
    return faker.name.firstName();
  }
}
