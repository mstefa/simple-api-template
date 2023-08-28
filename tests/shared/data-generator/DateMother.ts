import { faker } from '@faker-js/faker';

export class DateMother {
  static past(): Date {
    return faker.date.past()
  }

  static future(): Date {
    return faker.date.future()
  }

  static between(from: Date | number | string, to: Date | number | string): Date {
    return faker.date.between(from, to)
  }
}
