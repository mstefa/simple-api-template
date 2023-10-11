import { Nullable } from '../../shared-d/domain-d/Nullable';
import { Uuid } from '../../shared-d/domain-d/value-objects/Uuid';
import { Product } from './Product';

export interface ProductRepository {

  save(product: Product): Promise<void>;
  search(id: Uuid): Promise<Nullable<Product>>;

}
