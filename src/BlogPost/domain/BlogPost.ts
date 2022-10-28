import { Email } from '../../Shared/Domain/ValueObjects.ts/Email';
import { Uuid } from '../../Shared/Domain/ValueObjects.ts/Uuid';
import { BlogBody } from './ValueObjects/BlogBody';
import { BlogDate } from './ValueObjects/BlogDate';
import { BlogDescription } from './ValueObjects/BlogDescription';
import { BlogTitle } from './ValueObjects/BlogTitle';

export class BlogPost {
  constructor(
    readonly id: Uuid,
    readonly title: BlogTitle,
    readonly description: BlogDescription,
    readonly body: BlogBody,
    readonly date: BlogDate,
    readonly authorEmail: Email
  ) {}
}
