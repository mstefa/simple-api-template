import { InvalidArgumentError } from '../../../shared/domain/errors/InvalidArgumentError';

const MIN_LENGTH = 50;
const MAX_LENGTH = 300;

export class ProductDescription {
  readonly value: string;
  constructor(value: string) {
    this.ensureLength(value);
    this.value = value;
  }

  toString(): string {
    return this.value;
  }

  private ensureLength(value: string): void {

    if (value.length < MIN_LENGTH || value.length > MAX_LENGTH) {
      throw new InvalidArgumentError(`The ProductDescription <${value}> has more than ${MAX_LENGTH} or less than ${MIN_LENGTH} characters`);
    }
  }
}
