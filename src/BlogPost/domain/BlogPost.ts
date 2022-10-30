import { AggregateRoot } from '../../Shared/Domain/AggregateRoot';
import { Email } from '../../Shared/Domain/ValueObjects.ts/Email';
import { Uuid } from '../../Shared/Domain/ValueObjects.ts/Uuid';
import { BlogBody } from './ValueObjects/BlogBody';
import { BlogDate } from './ValueObjects/BlogDate';
import { BlogDescription } from './ValueObjects/BlogDescription';
import { BlogTitle } from './ValueObjects/BlogTitle';

export class BlogPost extends AggregateRoot {
  constructor(
    readonly id: Uuid,
    readonly title: BlogTitle,
    readonly description: BlogDescription,
    readonly body: BlogBody,
    readonly date: BlogDate,
    readonly authorEmail: Email
  ) {
    super();
  }

  toPrimitives() {
    return {
      id: this.id.value,
      title: this.title.value,
      description: this.description.value,
      body: this.body.value,
      date: this.date.value,
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
  ): BlogPost {
    return new BlogPost(
      new Uuid(id),
      new BlogTitle(title),
      new BlogDescription(description),
      new BlogBody(body),
      new BlogDate(date),
      new Email(authorEmail)
    );
  }
}
