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
    public title: ProductTitle,
    public description: ProductDescription,
    public price: ProductPrice,
    public image: ProductImage,
    public category: Category

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
    data: ProductDto
  ): Product {

    return new Product(
      new Uuid(data.id),
      new ProductTitle(data.title),
      new ProductDescription(data.description),
      new ProductPrice(data.price),
      new ProductImage(data.image),
      new Category(data.category)
    );
  }
}
