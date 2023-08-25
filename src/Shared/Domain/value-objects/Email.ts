import { InvalidArgumentError } from '../Errors/InvalidArgumentError';

export class Email {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsValidEmail(value);
    this.value = value;
  }

  toString(): string {
    return this.value;
  }

  private ensureIsValidEmail(email: string): void {
    const emailPattern = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

    if (!emailPattern.test(email)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${email}>`);
    }
  }
}
