import { faker } from '@faker-js/faker';

export class WordMother {
  static random(): string {
    return faker.lorem.word()
  }
}
