import { Product } from '../../../src/product/domain/Product';
import { ProductDescription } from '../../../src/product/domain/value-objects/ProductDescription';
import { ProductImage } from '../../../src/product/domain/value-objects/ProductImage';
import { ProductPrice } from '../../../src/product/domain/value-objects/ProductPrice';
import { ProductTitle } from '../../../src/product/domain/value-objects/ProductTitle';
import { LongTextMother } from '../../shared/data-generator/LongTextMother';
import { NumberMother } from '../../shared/data-generator/NumberMother';
import { UrlMother } from '../../shared/data-generator/UrlMother';
import { UuidMother } from '../../shared/data-generator/UuidMother';
import { WordMother } from '../../shared/data-generator/WordMother';
import { CategoryMother } from './CategoryMother';


export class ProductMother {

  static random = (): Product => {

    const product = new Product(
      UuidMother.random(),
      new ProductTitle(WordMother.random()),
      new ProductDescription(LongTextMother.random()),
      new ProductPrice(NumberMother.between(0, 1000)),
      new ProductImage(UrlMother.random()),
      CategoryMother.random()
    )

    return product
  }
}
