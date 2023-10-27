import { Cart } from '../../../src/cart/domain/Cart';
import { CartRepository } from '../../../src/cart/domain/CartRepository';
import { Nullable } from '../../../src/shared/domain/Nullable';
import { Uuid } from '../../../src/shared/domain/value-objects/Uuid';

export class CartRepositoryMock implements CartRepository {

  private mockSave = jest.fn();
  private mockSearchByUser = jest.fn();
  private mockCart: Nullable<Cart> = null;


  async save(cart: Cart): Promise<void> {
    this.mockSave(cart);
  }

  searchByUser(userId: Uuid): Promise<Nullable<Cart>> {
    this.mockSearchByUser(userId);

    return Promise.resolve(this.mockCart)
  }

  assertLastSavedCartIs(expected: Cart): void {
    const mock = this.mockSave.mock;
    const lastSavedCart = mock.calls[mock.calls.length - 1][0] as Cart;
    expect(lastSavedCart).toBeInstanceOf(Cart);
    expect(lastSavedCart.products).toEqual(expected.products);
    expect(lastSavedCart.userId).toEqual(expected.userId);
  }

  returnOnSearch(cart: Cart) {
    this.mockCart = cart;
  }

  assertSearch(userId: Uuid) {
    expect(this.searchByUser).toHaveBeenCalledWith(userId);
  }
}
