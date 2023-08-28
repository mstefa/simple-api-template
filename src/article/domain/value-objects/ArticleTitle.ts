import { InvalidArgumentError } from '../../../shared/domain/Errors/InvalidArgumentError';

export class ArticleTitle {
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
