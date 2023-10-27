import { Uuid } from "../../shared/domain/value-objects/Uuid";
import { UuidGenerator } from "../../shared/infrastructure/utils/UuidGenerator";
import { Cart } from "../domain/Cart";
import { CartProduct } from "../domain/CartProduct";
import { CartRepository } from "../domain/CartRepository";
import { UpdateCartDto } from "../dtos/UpdateCartDto";

export class CartUpdater {
  private repository: CartRepository;

  constructor(repository: CartRepository) {
    this.repository = repository;
  }

  async run(data: UpdateCartDto): Promise<void> {

    const cart = await this.repository.searchByUser(new Uuid(data.userId))

    if (cart) {

      cart.updateCart({ id: data.productId, quantity: data.quantity })
      await this.repository.save(cart)

      return

    }

    const newCart = new Cart(
      UuidGenerator.new(),
      new Uuid(data.userId),
      [new CartProduct(data.productId, data.quantity)]
    )
    await this.repository.save(newCart)

    return
  }
}
