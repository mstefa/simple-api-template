import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { ProductDto } from '../dtos/ProductDto';
import { Category } from './value-objects/Category';
import { ProductDescription } from './value-objects/ProductDescription';
import { ProductImage } from './value-objects/ProductImage';
import { ProductPrice } from './value-objects/ProductPrice';
import { ProductTitle } from './value-objects/ProductTitle';

export class Product extends AggregateRoot {

  constructor(
    readonly id: Uuid,
    readonly title: ProductTitle,
    readonly description: ProductDescription,
    readonly price: ProductPrice,
    readonly image: ProductImage,
    readonly category: Category,

  ) {
    super();
  }

  toPrimitives(): ProductDto {

    return {
      id: this.id.value,
      title: this.title.value,
      description: this.description.value,
      price: this.price.value,
      image: this.image.value,
      category: this.category.value,
    };
  }

  static fromPrimitives(
    id: string,
    title: string,
    description: string,
    price: number,
    image: string,
    category: string

  ): Product {

    return new Product(
      new Uuid(id),
      new ProductTitle(title),
      new ProductDescription(description),
      new ProductPrice(price),
      new ProductImage(image),
      new Category(category)
    );
  }
}
