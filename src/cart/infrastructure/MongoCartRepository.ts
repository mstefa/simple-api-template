import { Nullable } from '../../shared/domain/Nullable';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { MongoRepository } from '../../shared/infrastructure/mongo/MongoRepository';
import { Cart } from '../domain/Cart';
import { CartRepository } from '../domain/CartRepository';

type CartProduct = {
  id: string;
  quantity: number;
}

interface CartDocument {
  _id: Uuid;
  userId: string;
  products: CartProduct[];
}

export class MongoCartRepository extends MongoRepository<Cart> implements CartRepository {


  protected collectionName(): string {
    return 'cart';
  }

  async save(cart: Cart): Promise<void> {
    // throw new Error('method not implemented')
    return this.persist(cart.id, cart);
  }

  async searchByUser(userId: Uuid): Promise<Nullable<Cart>> {
    const collection = await this.collection();
    const document = await collection.findOne<CartDocument>({ userId });


    return document ? Cart.fromPrimitives({
      id: document._id.value,
      userId: document.userId,
      products: document.products,
    }) :
      null
  }
}

