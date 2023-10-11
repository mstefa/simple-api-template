
import { Article } from '../../../src/article/domain/Article';
import { ArticleBody } from '../../../src/article/domain/value-objects/ArticleBody';
import { ArticleDate } from '../../../src/article/domain/value-objects/ArticleDate';
import { ArticleDescription } from '../../../src/article/domain/value-objects/ArticleDescription';
import { ArticleTitle } from '../../../src/article/domain/value-objects/ArticleTitle';
import { Email } from '../../../src/shared/domain/value-objects/Email';
import { DateMother } from '../../shared/data-generator/DateMother';
import { EmailMother } from '../../shared/data-generator/EmailMother';
import { ParagraphMother } from '../../shared/data-generator/ParagraphMother';
import { UuidMother } from '../../shared/data-generator/UuidMother';
import { WordsMother } from '../../shared/data-generator/WordsMother';

export class ArticleMother {

  static random = (): Article => {

    const article = new Article(
      UuidMother.random(),
      new ArticleTitle(WordsMother.wordRandom()),
      new ArticleDescription(ParagraphMother.byNumberOfParagraphs(1)),
      new ArticleBody(ParagraphMother.byNumberOfParagraphs(10)),
      new ArticleDate(DateMother.past().toISOString()),
      new Email(EmailMother.random())
    )

    return article
  }

  static givenEmail = (email: Email): Article => {
    const article = new Article(
      UuidMother.random(),
      new ArticleTitle(WordsMother.wordRandom()),
      new ArticleDescription(ParagraphMother.byNumberOfParagraphs(1)),
      new ArticleBody(ParagraphMother.byNumberOfParagraphs(10)),
      new ArticleDate(DateMother.past().toISOString()),
      email
    )

    return article
  }
  // TODO
  // static fromRequest = (articleRequest: Article): Article => {

  //   const article = new Article(
  //     new Uuid(articleRequest.id),
  //     new ArticleTitle(articleRequest.title),
  //     new ArticleDescription(articleRequest.description),
  //     new ArticleBody(articleRequest.body),
  //     new ArticleDate(articleRequest.date),
  //     new Email(articleRequest.authorEmail)
  //   )

  //   return article
  // }

}

