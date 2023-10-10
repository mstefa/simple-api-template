import { InvalidArgumentError } from '../../../shared/domain/errors/InvalidArgumentError';

export class ProductImage {
  readonly value: URL;
  constructor(value: string) {
    try {
      this.value = new URL(value);
    } catch (_) {
      throw new InvalidArgumentError(`The ProductImage <${value}> is an Invalid URL`
      )
    }
  }

  toString(): string {
    return this.value.href;
  }

}
