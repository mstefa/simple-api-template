import { Uuid } from "../../shared/domain/value-objects/Uuid";
import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";
import { Category } from "../domain/value-objects/Category";
import { ProductDescription } from "../domain/value-objects/ProductDescription";
import { ProductImage } from "../domain/value-objects/ProductImage";
import { ProductPrice } from "../domain/value-objects/ProductPrice";
import { ProductTitle } from "../domain/value-objects/ProductTitle";
import { ProductDto } from "../dtos/ProductDto";

export class ProductAdder {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  async run(data: ProductDto): Promise<void> {

    const product = new Product(
      new Uuid(data.id),
      new ProductTitle(data.title),
      new ProductDescription(data.description),
      new ProductPrice(data.price),
      new ProductImage(data.image),
      new Category(data.category)
    );

    await this.repository.save(product);

  }
}
