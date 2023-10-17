import { FilterOperator, Operator } from './FilterOperator';

export class Filter {
  readonly field: string;
  readonly operator: FilterOperator;
  readonly value: string;

  constructor(field: string, operator: Operator, value: string) {
    this.field = field;
    this.operator = new FilterOperator(operator);
    this.value = value;
  }

}
