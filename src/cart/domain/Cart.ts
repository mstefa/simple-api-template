import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { CartDto, CartProductDto } from '../dtos/CartDto';
import { CartProduct } from './CartProduct';

export class Cart extends AggregateRoot {

  constructor(
    readonly id: Uuid,
    private userId: Uuid,
    private products: CartProduct[],
  ) {
    super();
  }

  updateCart(productToUpdate: CartProductDto) {
    const productIndex = this.products.findIndex((product) => product.id === productToUpdate.id);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }
    this.products.push(new CartProduct(productToUpdate.id, productToUpdate.quantity))

    return

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

  static fromPrimitives(data: CartDto): Cart {
    const productsObject = data.products.map(product => new CartProduct(product.id, product.quantity));

    return new Cart(
      new Uuid(data.id),
      new Uuid(data.userId),
      productsObject
    );
  }
}
