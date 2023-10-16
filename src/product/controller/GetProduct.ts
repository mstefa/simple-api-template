import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared/infrastructure/Controller';
import { ProductFinder } from '../application/ProductFinder';

type GetProductRequest = Request & {
  params: unknown,
};

export class GetProduct extends Controller {
  private productFinder: ProductFinder;

  constructor(productFinder: ProductFinder) {
    super();
    this.productFinder = productFinder;
  }

  async run(req: GetProductRequest, res: Response) {
    const id = req.params.id;
    try {
      const product = await this.productFinder.run(id)
      res.status(httpStatus.OK).send(product);
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
