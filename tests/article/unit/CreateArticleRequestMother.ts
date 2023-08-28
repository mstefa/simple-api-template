import { CreateArticleRequest } from '../../../src/article/dtos/CreateArticleRequest'
import { DateMother } from '../../shared/data-generator/DateMother';
import { EmailMother } from '../../shared/data-generator/EmailMother';
import { LongTextMother } from '../../shared/data-generator/LongTextMother';
import { SentenceMother } from '../../shared/data-generator/SentenceMother';
import { UuidMother } from '../../shared/data-generator/UuidMother';
import { WordMother } from '../../shared/data-generator/WordMother';

export class CreateArticleRequestMother {

  static random = (): CreateArticleRequest => {

    const request = {
      id: UuidMother.random().value,
      title: WordMother.random(),
      description: SentenceMother.random(),
      body: LongTextMother.byNumberOfParagraphs(10),
      date: DateMother.past().toISOString(),
      authorEmail: EmailMother.random()
    }

    return request
  }

  static futureDate = (): CreateArticleRequest => {

    const request = {
      id: UuidMother.random().value,
      title: WordMother.random(),
      description: SentenceMother.random(),
      body: LongTextMother.byNumberOfParagraphs(10),
      date: DateMother.future().toISOString(),
      authorEmail: EmailMother.random()
    }

    return request
  }

  static wrongEmail = (): CreateArticleRequest => {

    const request = {
      id: UuidMother.random().value,
      title: WordMother.random(),
      description: SentenceMother.random(),
      body: LongTextMother.byNumberOfParagraphs(10),
      date: DateMother.past().toISOString(),
      authorEmail: "I am not an email"
    }

    return request
  }

  static tooShortTitle = (): CreateArticleRequest => {

    const request = {
      id: UuidMother.random().value,
      title: "a",
      description: SentenceMother.random(),
      body: LongTextMother.byNumberOfParagraphs(10),
      date: DateMother.past().toISOString(),
      authorEmail: EmailMother.random()
    }

    return request
  }

}

