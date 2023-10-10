import { ProductCreator } from '../../../src/product/application/ProductCreator'

let productCreator: ProductCreator;

beforeEach(() => {
  productCreator = new ProductCreator()
});

describe('Product Creator', () => {
  it('Create a new product successfully', async () => {

    productCreator.run()

  })

})
