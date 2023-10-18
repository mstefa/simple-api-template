import { Criteria } from '../../shared/domain/criteria/Criteria';
import { Nullable } from '../../shared/domain/Nullable';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { MongoRepository } from '../../shared/infrastructure/mongo/MongoRepository';
import { Product } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';

interface ProductDocument {
  _id: Uuid;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;

}

export class MongoProductRepository extends MongoRepository<Product> implements ProductRepository {

  protected collectionName(): string {
    return 'product';
  }

  async save(product: Product): Promise<void> {
    return this.persist(product.id, product);
  }

  async search(id: Uuid): Promise<Nullable<Product>> {
    const collection = await this.collection();
    const document = await collection.findOne<ProductDocument>({ _id: id });

    return document
      ? Product.fromPrimitives(
        document._id.value,
        document.title,
        document.description,
        document.price,
        document.image,
        document.category
      )
      : null;
  }

  async searchByCriteria(criteria: Criteria): Promise<Product[]> {

    const collection = await this.collection();
    const documents = await collection.find<ProductDocument>({})
      .skip(criteria.offset ? criteria.offset : 0)
      .limit(criteria.limit ? criteria.limit : 100);

    return documents.map(document => {
      return Product.fromPrimitives(
        document._id.value,
        document.title,
        document.description,
        document.price,
        document.image,
        document.category
      )
    }).toArray()
  }

}
