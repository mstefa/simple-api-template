import * as faker from 'faker';

export class PasswordMother {
  static random({ minLength = 0, maxLength }: { minLength?: number; maxLength: number }): string {
    return faker.random.alphaNumeric(Math.floor(Math.random() * (maxLength - minLength)) + minLength - 3) + "A1a";
  }
}