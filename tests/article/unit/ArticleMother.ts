
import { Article } from '../../../src/article/domain/Article';
import { ArticleBody } from '../../../src/article/domain/value-objects/ArticleBody';
import { ArticleDate } from '../../../src/article/domain/value-objects/ArticleDate';
import { ArticleDescription } from '../../../src/article/domain/value-objects/ArticleDescription';
import { ArticleTitle } from '../../../src/article/domain/value-objects/ArticleTitle';
import { Email } from '../../../src/shared/domain/value-objects/Email';
import { Uuid } from '../../../src/shared/domain/value-objects/Uuid';
import { DateMother } from '../../shared/data-generator/DateMother';
import { EmailMother } from '../../shared/data-generator/EmailMother';
import { LongTextMother } from '../../shared/data-generator/LongTextMother';
import { UuidMother } from '../../shared/data-generator/UuidMother';
import { WordMother } from '../../shared/data-generator/WordMother';

export class ArticleMother {

  static random = (): Article => {

    const article = new Article(
      new Uuid(UuidMother.random()),
      new ArticleTitle(WordMother.random()),
      new ArticleDescription(LongTextMother.byNumberOfParagraphs(1)),
      new ArticleBody(LongTextMother.byNumberOfParagraphs(10)),
      new ArticleDate(DateMother.past().toISOString()),
      new Email(EmailMother.random())
    )

    return article
  }

  static givenEmail = (email: Email): Article => {

    const article = new Article(
      new Uuid(UuidMother.random()),
      new ArticleTitle(WordMother.random()),
      new ArticleDescription(LongTextMother.byNumberOfParagraphs(1)),
      new ArticleBody(LongTextMother.byNumberOfParagraphs(10)),
      new ArticleDate(DateMother.past().toISOString()),
      email
    )

    return article
  }

}

