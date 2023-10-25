import { ProductsFetcher } from '../../../src/product/application/ProductsFetcher';
import { ProductRepositoryMock } from '../mocks/ProductRepositoryMock';
import { ProductMother } from './ProductMother';

let productsFetcher: ProductsFetcher;
let repository: ProductRepositoryMock;

beforeEach(() => {

  repository = new ProductRepositoryMock()
  productsFetcher = new ProductsFetcher(repository)

});

describe('ProductsFetcher', () => {
  it('Should return a list of products successfully', async () => {

    const product1 = ProductMother.random();
    const product2 = ProductMother.random();
    repository.returnOnSearchByCriteria([product1, product2])
    const data = await productsFetcher.run(2, 0)

    expect(data).toEqual([product1.toPrimitives(), product2.toPrimitives()])


  })

})
