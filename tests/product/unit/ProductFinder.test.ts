import { ProductFinder } from '../../../src/product/application/ProductFinder';
import { UuidMother } from '../../shared/data-generator/UuidMother';
import { ProductRepositoryMock } from '../mocks/ProductRepositoryMock';
import { ProductMother } from './ProductMother';

let productFinder: ProductFinder;
let productRepository: ProductRepositoryMock;

beforeEach(() => {

  productRepository = new ProductRepositoryMock()
  productFinder = new ProductFinder(productRepository)

});


describe('ProductFinder', () => {

  it('Find an existing article successfully', async () => {
    // Arrange
    const mockedProduct = ProductMother.random()
    const mockedId = mockedProduct.id;
    productRepository.returnOnSearch(mockedProduct)

    // Act
    const received = await productFinder.run(mockedId.toString())

    // Assert
    productRepository.assertSearch(mockedId);
    expect(received).toEqual(mockedProduct.toPrimitives())

  })

  it('Return an error when any product was found', async () => {
    // Arrange
    const mockedId = UuidMother.random();

    try {
      // Act
      await productFinder.run(mockedId.toString())
    } catch (e) {
      const error = e as Error
      // Assert
      expect(error.message as string).toMatch(`The product with ID: <${mockedId.toString()}> could not be found.`);
    }

    // Assert
    productRepository.assertSearch(mockedId);

  })

})
