import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared/infrastructure/Controller';
import { ProductAdder } from '../application/ProductAdder';
import { ProductDto } from '../dtos/ProductDto';

type PostProductRequest = Request & {
  body: ProductDto;
};

export class PostProduct extends Controller {
  private productAdder: ProductAdder;

  constructor(productAdder: ProductAdder) {
    super();
    this.productAdder = productAdder;
  }

  async run(req: PostProductRequest, res: Response) {
    const { id, title, description, price, image, category } = req.body;
    try {
      await this.productAdder.run({ id, title, description, price, image, category })
      res.status(httpStatus.OK).send();
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
