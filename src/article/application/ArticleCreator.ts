import { Email } from '../../shared-d/domain-d/value-objects/Email';
import { Uuid } from '../../shared-d/domain-d/value-objects/Uuid';
import { Article } from '../domain/Article';
import { ArticleRepository } from '../domain/ArticleRepository';
import { ArticleBody } from '../domain/value-objects/ArticleBody';
import { ArticleDate } from '../domain/value-objects/ArticleDate';
import { ArticleDescription } from '../domain/value-objects/ArticleDescription';
import { ArticleTitle } from '../domain/value-objects/ArticleTitle';
import { ArticleDto } from '../dtos/ArticleDto';

export class ArticleCreator {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  async run(data: ArticleDto): Promise<void> {
    const blogPost = new Article(
      new Uuid(data.id),
      new ArticleTitle(data.title),
      new ArticleDescription(data.description),
      new ArticleBody(data.body),
      new ArticleDate(data.date),
      new Email(data.authorEmail)
    );

    await this.repository.save(blogPost);
  }
}
