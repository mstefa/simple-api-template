import * as faker from 'faker';

export class WordMother {
  static random(): string {
    return faker.lorem.word()
  }
}
