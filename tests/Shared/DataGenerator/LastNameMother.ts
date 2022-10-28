import * as faker from 'faker';

export class LastNameMother {
  static random(): string {
    return faker.name.lastName();
  }
}
