

import { Nullable } from '../../shared/domain/Nullable';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { MongoRepository } from '../../shared/infrastructure/mongo/MongoRepository';
import { Article } from '../domain/Article';
import { ArticleRepository } from '../domain/ArticleRepository';

interface ArticleDocument {
  _id: Uuid;
  title: string;
  description: string;
  body: string;
  date: string;
  authorEmail: string;
}

export class MongoArticleRepository extends MongoRepository<Article> implements ArticleRepository {
  protected collectionName(): string {
    return 'article';
  }

  async save(blogPost: Article): Promise<void> {
    return this.persist(blogPost.id, blogPost);
  }

  async search(id: Uuid): Promise<Nullable<Article>> {
    const collection = await this.collection();
    const document = await collection.findOne<ArticleDocument>({ _id: id });

    console.log(document?._id.toString())

    return document
      ? Article.fromPrimitives(
        document._id.value,
        document.title,
        document.description,
        document.body,
        document.date,
        document.authorEmail
      )
      : null;
  }
}
