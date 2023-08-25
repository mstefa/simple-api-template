import { faker } from '@faker-js/faker';

export class LastNameMother {
  static random(): string {
    return faker.name.lastName();
  }
}
