import { InvalidArgumentError } from '../../../shared/domain/errors/InvalidArgumentError';

export class ProductPrice {
  readonly value: number;
  constructor(value: number) {
    this.ensureIsPositive(value);
    this.value = value;
  }

  toString(): string {
    return this.value.toString();
  }

  private ensureIsPositive(value: number): void {
    if (value < 0) {
      throw new InvalidArgumentError(`The ProductPrice <${value}> is negative`);
    }
  }
}
