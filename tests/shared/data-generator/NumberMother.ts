import { faker } from '@faker-js/faker';

export class NumberMother {

  static randomInteger(): number {
    return faker.number.int();
  }

  static randomFloat(): number {
    return faker.number.float();
  }

  static betweenFloat(min: number, max: number): number {
    return faker.number.float({ min, max });
  }

}
