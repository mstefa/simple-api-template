import * as faker from 'faker';

export class UrlMother {
  static random(): string {
    return faker.internet.url();
  }
}