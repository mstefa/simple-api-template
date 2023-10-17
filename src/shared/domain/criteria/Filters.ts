import { Filter } from './Filter';

export class Filters {
  readonly filters: Filter[];

  constructor(filters: Filter[]) {
    this.filters = filters;
  }

  static none(): Filters {
    return new Filters([]);
  }
}
