import { Nullable } from '../../shared/domain/Nullable';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { Cart } from './Cart';

export interface CartRepository {

  save(cart: Cart): Promise<void>;
  searchByUser(userId: Uuid): Promise<Nullable<Cart>>;

}
