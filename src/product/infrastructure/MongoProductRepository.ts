import { Nullable } from '../../shared-d/domain-d/Nullable';
import { Uuid } from '../../shared-d/domain-d/value-objects/Uuid';
import { MongoRepository } from '../../shared-d/infrastructure/mongo/MongoRepository';
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
    console.log(object)
    throw new Error('method not implemented')
    // return this.persist(blogPost.id, blogPost);
  }

  async search(id: Uuid): Promise<Nullable<Product>> {
    const collection = await this.collection();
    const document = await collection.findOne<ProductDocument>({ _id: id });
    console.log(document)
    throw new Error('method not implemented')

    //	return document
    //		? Product.fromPrimitives(
    //		)
    //		: null;
  }
}
