import { ProductCreator } from '../../../src/product/application/ProductCreator'
import { ProductMother } from './ProductMother';

let productCreator: ProductCreator;

beforeEach(() => {
  productCreator = new ProductCreator()
});

describe('Product Creator', () => {
  it('Create a new product successfully', async () => {

    const product = ProductMother.random()
    productCreator.run(product.toPrimitives())

  })

})
