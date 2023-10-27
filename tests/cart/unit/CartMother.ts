import { Cart } from '../../../src/cart/domain/Cart';
import { CartProduct } from '../../../src/cart/domain/CartProduct';
import { NumberMother } from '../../shared/data-generator/NumberMother';
import { UuidMother } from '../../shared/data-generator/UuidMother';

export class CartMother {

  static random = (numberOfProducts: number): Cart => {
    const CartProducts: CartProduct[] = [];

    for (let i = 0; i < numberOfProducts; i++) {
      const product = new CartProduct(
        UuidMother.random().value,
        NumberMother.randomInteger()
      )
      CartProducts.push(product);
    }

    const domainObject = new Cart(
      UuidMother.random(),
      UuidMother.random(),
      CartProducts
    )

    return domainObject
  }
}
