import { faker } from '@faker-js/faker';

export class NumberMother {
  static random(): number {
    return faker.number.float();
  }

  static between(min: number, max: number): number {
    return faker.number.float({ min, max });
  }
}
