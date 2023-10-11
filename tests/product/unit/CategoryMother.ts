import { CategoriesEnum, Category } from "../../../src/product/domain/value-objects/Category";

export class CategoryMother {
  static random(): Category {
    const values = Object.values(CategoriesEnum);
    const randomIndex = Math.floor(Math.random() * values.length);

    return new Category(values[randomIndex]);
  }

  static differentFrom(name: Category): Category {

    let newName = this.random();

    while (newName.toString() === name.toString()) {
      newName = this.random();
    }

    return newName;
  }
}
