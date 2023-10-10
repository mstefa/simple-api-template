import { Nullable } from '../../shared/domain/Nullable';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { MongoRepository } from '../../shared/infrastructure/mongo/MongoRepository';
import { Product } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';

interface ProductDocument {
  _id: Uuid;
}

export class MongoProductRepository extends MongoRepository<Product> implements ProductRepository {
  protected collectionName(): string {
    return 'article';
  }

  async save(object: Product): Promise<void> {
    throw new Error('method not implemented')
    // return this.persist(blogPost.id, blogPost);
  }

  async search(id: Uuid): Promise<Nullable<Product>> {
    const collection = await this.collection();
    const document = await collection.findOne<ProductDocument>({ _id: id });

    throw new Error('method not implemented')

    //	return document
    //		? Product.fromPrimitives(
    //		)
    //		: null;
  }
}
