import { Nullable } from '../../Shared/Domain/Nullable';
import { Uuid } from '../../Shared/Domain/ValueObjects.ts/Uuid';
import { MongoRepository } from '../../Shared/infrastructure/mongo/MongoRepository';
import { BlogPost } from '../domain/BlogPost';
import { BlogPostRepository } from '../domain/BlogPostRepository';

interface BlogPostDocument {
  _id: string;
  title: string;
  description: string;
  body: string;
  date: string;
  authorEmail: string;
}

export class MongoBlogPostRepository extends MongoRepository<BlogPost> implements BlogPostRepository {
  protected collectionName(): string {
    return 'blog_post';
  }

  async save(blogPost: BlogPost): Promise<void> {
    return this.persist(blogPost.id.value, blogPost);
  }

  async search(id: Uuid): Promise<Nullable<BlogPost>> {
    const collection = await this.collection();
    const document = await collection.findOne<BlogPostDocument>({ _id: id });
    return document
      ? BlogPost.fromPrimitives(
          document._id,
          document.title,
          document.description,
          document.body,
          document.date,
          document.authorEmail
        )
      : null;
  }
}
