import { Product } from '../../../src/product/domain/Product';
import { UuidMother } from '../../shared/data-generator/UuidMother';


export class ProductMother {

  static random = (): Product => {

    const product = new Product(
      UuidMother.random(),
      //new ValueObject(WordMother.random()),
    )

    return product
  }
}
