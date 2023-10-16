import { EntityNotFoundError } from "../../shared/domain/errors/EntityNotFoundError";
import { Uuid } from "../../shared/domain/value-objects/Uuid";
import { ProductRepository } from "../domain/ProductRepository";
import { ProductDto } from "../dtos/ProductDto";

export class ProductFinder {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  async run(idValue: string): Promise<ProductDto> {
    const id = new Uuid(idValue);
    const product = await this.repository.search(id);

    if (!product) {
      throw new EntityNotFoundError(`The product with ID: <${idValue}> could not be found.`)
    }

    return product?.toPrimitives();

  }
}
