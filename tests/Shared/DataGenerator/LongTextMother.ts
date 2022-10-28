import * as faker from 'faker';

export class LongTextMother {
  static random(): string {
    return faker.lorem.paragraphs()
  }
  static byNumberOfParagraphs(numberOfParagraph: number): string {
    return faker.lorem.paragraphs(numberOfParagraph)
  }
}
