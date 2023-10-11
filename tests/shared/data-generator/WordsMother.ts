import { faker } from '@faker-js/faker';

export class WordsMother {
  static wordRandom(): string {
    return faker.lorem.word()
  }

  static alphanumericRandom(min: number, max: number): string {
    return faker.string.alphanumeric({ length: { min, max } })
  }
}
