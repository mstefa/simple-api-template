import { Nullable } from '../../Shared/Domain/Nullable';
import { Uuid } from '../../Shared/Domain/ValueObjects.ts/Uuid';
import { MongoRepository } from '../../Shared/infrastructure/mongo/MongoRepository';
import { BlogPost } from '../domain/BlogPost';
import { BlogPostRepository } from '../domain/BlogPostRepository';

class AppDataDocument {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly body: string,
    readonly date: string,
    readonly authorEmail: string
  ) {}
}

  constructor(appData: AppData) {
    this._id = appData.id;
    this.metadata = appData.metadata;
    this.technical_data = appData.technicalData;
  }
}

export class MongoBlogPostRepository extends MongoRepository<BlogPost> implements BlogPostRepository {
  protected collectionName(): string {
    return 'app_data';
  }

  async save(blogPost: BlogPost): Promise<void> {
    const collection = await this.collection();

    const document = new AppDataDocument(blogPost);

    await collection.updateOne({ _id: blogPost.id }, { $set: document }, { upsert: true });
  }

  async search(id: Uuid): Promise<Nullable<BlogPost>> {
    const collection = await this.collection();
    const document = await collection.findOne<AppDataDocument>({ _id: id });
    return document ? new BlogPost() : null;
  }
}
