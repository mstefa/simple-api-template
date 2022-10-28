import * as faker from 'faker';

export class PhoneMother {
  static random(): string {
    return faker.phone.phoneNumber('+###########');
  }
}
