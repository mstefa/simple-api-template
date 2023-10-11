import { faker } from '@faker-js/faker';

export class ParagraphMother {
  static random(): string {
    return faker.lorem.paragraphs()
  }

  static byNumberOfParagraphs(numberOfParagraph: number): string {
    return faker.lorem.paragraphs(numberOfParagraph)
  }
}
