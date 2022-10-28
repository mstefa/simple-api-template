import * as faker from 'faker';

export class EmailMother {
  static random(): string {
    return faker.internet.email();
  }
}
