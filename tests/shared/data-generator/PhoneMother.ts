import { faker } from '@faker-js/faker';

export class PhoneMother {
  static random(): string {
    return faker.phone.phoneNumber('+###########');
  }
}
