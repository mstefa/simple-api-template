import { InvalidArgumentError } from '../../../shared/domain/Errors/InvalidArgumentError';

export class ArticleBody {
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
