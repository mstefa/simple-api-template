import { PastDate } from '../../../shared-d/domain-d/value-objects/Abstracts/PastDate';

export class ArticleDate extends PastDate {
  constructor(value: string) {
    super(value);
  }
}
