import { InvalidArgumentError } from '../../../shared/domain/errors/InvalidArgumentError';


export enum CategoriesEnum {
  MEN_CLOTHING = 'men_clothing',
  WOMEN_CLOTHING = 'women_clothing',
}

export class Category {
  readonly value: CategoriesEnum;

  constructor(category: string) {
    if (!Category.isValidCategory(category)) {
      throw new InvalidArgumentError(`Name <${category}> is not listed as a valid Category`);
    }
    this.value = category as CategoriesEnum;
  }

  toString(): string {
    return this.value;
  }

  private static isValidCategory(category: string): category is CategoriesEnum {
    return Object.values(CategoriesEnum).includes(category as CategoriesEnum);
  }
}
