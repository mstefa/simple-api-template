import { Criteria } from "../../shared/domain/criteria/Criteria";
import { Filters } from "../../shared/domain/criteria/Filters";
import { Order } from "../../shared/domain/criteria/Order";
import { ProductRepository } from "../domain/ProductRepository";
import { ProductDto } from "../dtos/ProductDto";

export class ProductsFetcher {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  async run(): Promise<ProductDto[]> {
    const criteria = new Criteria(Filters.none(), Order.none(), 10, 0)
    const products = await this.repository.searchByCriteria(criteria);

    return products.map(product => product.toPrimitives());
  }
}
