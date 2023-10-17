import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared/infrastructure/Controller';
import { ProductsFetcher } from '../application/ProductsFetcher';


export class GetProducts extends Controller {
  private productsFetcher: ProductsFetcher;

  constructor(productsFetcher: ProductsFetcher) {
    super();
    this.productsFetcher = productsFetcher;
  }

  async run(req: Request, res: Response) {

    try {
      const products = await this.productsFetcher.run();
      res.status(httpStatus.OK).send(products);
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
