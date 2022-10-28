import { InvalidArgumentError } from '../../../Shared/Domain/Errors/InvalidArgumentError';

export class BlogTitle {
  readonly value: string;
  constructor(value: string) {
    this.ensureLength(value);
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
  private ensureLength(value: string): void {
    if (value.length < 3 && value.length > 50) {
      throw new InvalidArgumentError(`The Blog Title <value> has more than 3 or less than 50
      characters`);
    }
  }
}
