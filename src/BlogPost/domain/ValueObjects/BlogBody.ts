import { InvalidArgumentError } from '../../../Shared/Domain/Errors/InvalidArgumentError';

export class BlogBody {
  readonly value: string;
  constructor(value: string) {
    this.ensureLength(value);
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
  private ensureLength(value: string): void {
    if (value.length < 100) {
      throw new InvalidArgumentError(`The Blog content has less than 100  characters`);
    }
  }
}
