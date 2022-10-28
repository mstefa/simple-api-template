import * as faker from 'faker';

export class SentenceMother {
  static random(): string {
    return faker.lorem.sentence() 
  }
}
