import { faker } from '@faker-js/faker';

export class SentenceMother {
  static random(): string {
    return faker.lorem.sentence()
  }
}
