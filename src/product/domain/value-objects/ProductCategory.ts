import { InvalidArgumentError } from '../../../shared/domain/errors/InvalidArgumentError';


export enum CategoryEnum {
  MEN_CLOTHING = 'men_clothing',
  WOMEN_CLOTHING = 'women_clothing',
}

export class Categories {
  readonly value: CategoryEnum;

  constructor(category: string) {
    if (!Categories.isValidCategory(category)) {
      throw new InvalidArgumentError(`Name <${category}> is not listed as a valid Category`);
    }
    this.value = category as CategoryEnum;
  }

  toString(): string {
    return this.value;
  }

  private static isValidCategory(category: string): category is CategoryEnum {
    return Object.values(CategoryEnum).includes(category as CategoryEnum);
  }
}
