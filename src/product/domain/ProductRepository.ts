import { Criteria } from '../../shared/domain/criteria/Criteria';
import { Nullable } from '../../shared/domain/Nullable';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { Product } from './Product';

export interface ProductRepository {

  save(product: Product): Promise<void>;
  search(id: Uuid): Promise<Nullable<Product>>;
  searchByCriteria(criteria: Criteria): Promise<Product[]>;

}
