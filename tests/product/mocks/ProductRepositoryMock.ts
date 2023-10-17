import { Product } from '../../../src/product/domain/Product';
import { ProductRepository } from '../../../src/product/domain/ProductRepository';
import { Nullable } from '../../../src/shared/domain/Nullable';
import { Uuid } from '../../../src/shared/domain/value-objects/Uuid';

export class ProductRepositoryMock implements ProductRepository {

  private mockSave = jest.fn();
  private mockSearch = jest.fn();
  private mockProduct: Nullable<Product> = null;
  private mockProducts: Product[] = [];


  async save(user: Product): Promise<void> {
    this.mockSave(user);
  }

  search(id: Uuid): Promise<Nullable<Product>> {
    this.mockSearch(id);

    return Promise.resolve(this.mockProduct);
  }

  searchByCriteria(): Promise<Product[]> {
    return Promise.resolve(this.mockProducts);
  }

  assertLastSavedProductIs(expected: Product): void {
    const mock = this.mockSave.mock;
    const lastSavedProduct = mock.calls[mock.calls.length - 1][0] as Product;
    expect(lastSavedProduct).toBeInstanceOf(Product);
    expect(lastSavedProduct).toEqual(expected);
  }

  returnOnSearch(article: Product) {
    this.mockProduct = article;
  }

  returnOnSearchByCriteria(articles: Product[]) {
    this.mockProducts = articles;
  }

  assertSearch(id: Uuid) {
    expect(this.mockSearch).toHaveBeenCalledWith(id);
  }

}
