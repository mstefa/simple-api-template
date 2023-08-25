import { faker } from '@faker-js/faker';

export class EmailMother {
  static random(): string {
    return faker.internet.email();
  }
}
