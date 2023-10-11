import { ProductCreator } from '../../../src/product/application/ProductCreator'
import { ProductRepositoryMock } from '../mocks/ProductRepositoryMock';
import { ProductMother } from './ProductMother';

let productRepository: ProductRepositoryMock;
let productCreator: ProductCreator;

beforeEach(() => {
  productRepository = new ProductRepositoryMock()
  productCreator = new ProductCreator(productRepository)
});

describe('Product Creator', () => {
  it('Create a new product successfully', async () => {

    const product = ProductMother.random()

    productCreator.run(product.toPrimitives())

    productRepository.assertLastSavedProductIs(product)

  })

})
