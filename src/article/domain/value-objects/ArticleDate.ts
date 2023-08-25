import { PastDate } from '../../../shared/domain/value-objects/Abstracts/PastDate';

export class ArticleDate extends PastDate {
  constructor(value: string) {
    super(value);
  }
}
