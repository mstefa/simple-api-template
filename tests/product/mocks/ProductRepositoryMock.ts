import { Product } from '../../../src/product/domain/Product';
import { ProductRepository } from '../../../src/product/domain/ProductRepository';
import { Nullable } from '../../../src/shared/domain/Nullable';
import { Email } from '../../../src/shared/domain/value-objects/Email';
import { Uuid } from '../../../src/shared/domain/value-objects/Uuid';

export class ProductRepositoryMock implements ProductRepository {

  private mockSave = jest.fn();
  private mockSearch = jest.fn();
  private mockProduct: Nullable<Product> = null;

  async save(user: Product): Promise<void> {
    this.mockSave(user);
  }

  search(id: Uuid): Promise<Nullable<Product>> {
    this.mockSearch(id);

    return Promise.resolve(this.mockProduct);
  }

  searchByEmail(email: Email): Promise<Nullable<Product>> {
    this.mockSearch(email);

    return Promise.resolve(this.mockProduct);
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

  assertSearch(id: Uuid) {
    expect(this.mockSearch).toHaveBeenCalledWith(id);
  }

}
