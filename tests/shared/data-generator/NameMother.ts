import { faker } from '@faker-js/faker';

export class NameMother {
  static random(): string {
    return faker.name.firstName();
  }
}
