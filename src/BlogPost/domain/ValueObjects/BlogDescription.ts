import { InvalidArgumentError } from '../../../Shared/Domain/Errors/InvalidArgumentError';

export class BlogDescription {
  readonly value: string;

  constructor(value: string) {
    this.ensureLength(value);
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
  private ensureLength(value: string): void {
    if (value.length < 30 && value.length > 300) {
      throw new InvalidArgumentError(`The Blog Description <${value}> has more than 300 or less than 30 characters`);
    }
  }
}
