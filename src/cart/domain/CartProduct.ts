import { InvalidArgumentError } from '../../shared/domain/errors/InvalidArgumentError';

export class CartProduct {
  readonly id: string;
  readonly quantity: number;

  constructor(id: string, quantity: number) {
    this.ensureIsPositive(quantity);
    this.id = id;
    this.quantity = quantity
  }

  toString(): string {
    return `productId:${this.id}:quantity:${this.quantity}`;
  }

  private ensureIsPositive(value: number): void {
    if (value < 0) {
      throw new InvalidArgumentError(`The ProductPrice <${value}> is negative`);
    }
  }
}
