import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { ProductDto } from '../dtos/ProductDto';
// import { ProductDto } from '../dtos/ProductDto';

export class Product extends AggregateRoot {

  constructor(
    readonly id: Uuid,
    readonly title: string,
    readonly description: string,
    readonly price: number,
    readonly image: string,
    readonly category: string,

  ) {
    super();
  }

  toPrimitives(): ProductDto {
    throw new Error('not implemented')

    return {
      id: this.id.value,
      title: "string",
      description: "string",
      price: 123,
      image: "string",
      category: "string",
    };
  }

  static fromPrimitives(
    // id: string,
  ): Product {
    throw new Error('not implemented')

    // return new Product(
    //   new Uuid(id),
    // );
  }
}
