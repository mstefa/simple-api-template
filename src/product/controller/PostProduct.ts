import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared/infrastructure/Controller';
import { ProductCreator } from '../application/ProductCreator';
import { ProductDto } from '../dtos/ProductDto';

type PostProductRequest = Request & {
  body: ProductDto;
};

export class PostProduct extends Controller {
  private productCreator: ProductCreator;

  constructor(productCreator: ProductCreator) {
    super();
    this.productCreator = productCreator;
  }

  async run(req: PostProductRequest, res: Response) {
    const { id, title, description, price, image, category } = req.body;
    try {
      this.productCreator.run({ id, title, description, price, image, category })
      res.status(httpStatus.OK).send();
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
