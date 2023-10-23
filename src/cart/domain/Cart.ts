import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { CartDto, CartProductDto } from './dtos/CartDtos';
import { CartProduct } from './value-objects/CartProduct';

export class Cart extends AggregateRoot {

  constructor(
    readonly id: Uuid,
    readonly userId: Uuid,
    readonly products: CartProduct[],
  ) {
    super();
  }

  toPrimitives(): CartDto {
    const products = this.products.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
      }
    })

    return {
      id: this.id.value,
      userId: this.userId.value,
      products
    };
  }

  static fromPrimitives(
    id: string,
    userId: string,
    products: CartProductDto[],

  ): Cart {
    const productsObject = products.map(product => new CartProduct(product.id, product.quantity));

    return new Cart(
      new Uuid(id),
      new Uuid(userId),
      productsObject
    );
  }
}
