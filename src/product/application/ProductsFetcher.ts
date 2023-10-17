import { ProductRepository } from "../domain/ProductRepository";
import { ProductDto } from "../dtos/ProductDto";

export class ProductsFetcher {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  async run(): Promise<ProductDto[]> {
    const products = await this.repository.searchByCriteria();

    return products.map(product => product.toPrimitives());
  }
}
