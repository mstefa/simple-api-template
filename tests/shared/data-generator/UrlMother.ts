import { faker } from '@faker-js/faker';

export class UrlMother {
  static random(): string {
    return faker.internet.url();
  }
}
