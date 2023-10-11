import { ProductAdder } from '../../../src/product/application/ProductAdder'
import { ProductRepositoryMock } from '../mocks/ProductRepositoryMock';
import { ProductMother } from './ProductMother';

let productRepository: ProductRepositoryMock;
let productAdder: ProductAdder;

beforeEach(() => {
  productRepository = new ProductRepositoryMock()
  productAdder = new ProductAdder(productRepository)
});

describe('ProductAdder', () => {
  it('Add a new product successfully', async () => {

    const product = ProductMother.random()

    productAdder.run(product.toPrimitives())

    productRepository.assertLastSavedProductIs(product)

  })

  it('Throw an exception when the title is too short', async () => {

    const product = ProductMother.random()
    const productDto = product.toPrimitives();
    productDto.title = '';

    try {
      await productAdder.run(productDto)
    } catch (e) {
      const error = e as Error
      expect(error.message as string).toMatch("The ProductTitle <> has more than 50 or less than 1");
    }

  })

})
