import { PastDate } from '../../../Shared/Domain/ValueObjects.ts/Abstracts/PastDate';

export class BlogDate extends PastDate {
  constructor(value: string) {
    super(value);
  }
}
