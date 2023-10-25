import { Uuid } from "../../shared/domain/value-objects/Uuid";
import { CartRepository } from "../domain/CartRepository";
import { UpdateCartDto } from "../dtos/UpdateCartDto";

export class CartUpdater {
  private repository: CartRepository;

  constructor(repository: CartRepository) {
    this.repository = repository;
  }

  async run(data: UpdateCartDto): Promise<void> {
    const cart = this.repository.searchByUser(new Uuid(data.userId))
    console.log(cart)

    return
  }
}
