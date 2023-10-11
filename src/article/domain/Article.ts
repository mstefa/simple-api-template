import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { Email } from '../../shared/domain/value-objects/Email';
import { Uuid } from '../../shared/domain/value-objects/Uuid';
import { ArticleDto } from '../dtos/ArticleDto';
import { ArticleBody } from './value-objects/ArticleBody';
import { ArticleDate } from './value-objects/ArticleDate';
import { ArticleDescription } from './value-objects/ArticleDescription';
import { ArticleTitle } from './value-objects/ArticleTitle';

export class Article extends AggregateRoot {
  constructor(
    readonly id: Uuid,
    readonly title: ArticleTitle,
    readonly description: ArticleDescription,
    readonly body: ArticleBody,
    readonly date: ArticleDate,
    readonly authorEmail: Email
  ) {
    super();
  }

  toPrimitives(): ArticleDto {
    return {
      id: this.id.value,
      title: this.title.value,
      description: this.description.value,
      body: this.body.value,
      date: this.date.toString(),
      authorEmail: this.authorEmail.value
    };
  }

  static fromPrimitives(
    id: string,
    title: string,
    description: string,
    body: string,
    date: string,
    authorEmail: string
  ): Article {
    return new Article(
      new Uuid(id),
      new ArticleTitle(title),
      new ArticleDescription(description),
      new ArticleBody(body),
      new ArticleDate(date),
      new Email(authorEmail)
    );
  }
}
