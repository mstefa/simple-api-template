import { ProductDto } from "../dtos/ProductDto";

export class ProductCreator {
  //private repository: Repository;

  constructor(/**repository: repository*/) {
    //this.repository = repository;
  }

  async run(data: ProductDto): Promise<void> {
    console.log(data)
  }
}
