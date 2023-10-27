import { CartUpdater } from "../../../src/cart/application/CartUpdater";
import { UpdateCartDto } from "../../../src/cart/dtos/UpdateCartDto";
import { CartRepositoryMock } from "../mocks/CartRepositoryMock";
import { CartMother } from "./CartMother";

let cartRepository: CartRepositoryMock
let cartUpdater: CartUpdater;


beforeEach(() => {
  cartRepository = new CartRepositoryMock()
  cartUpdater = new CartUpdater(cartRepository)

});

describe('CartUpdater', () => {
  it('update cart successfully', async () => {
    const cart = CartMother.random(1)
    const cartDto: UpdateCartDto = {
      userId: cart.userId.value,
      productId: cart.products[0].id,
      quantity: cart.products[0].quantity
    }

    await cartUpdater.run(cartDto)

    cartRepository.assertLastSavedCartIs(cart)

  })

})
