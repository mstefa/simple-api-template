import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared/infrastructure/Controller';
import { ProductsFetcher } from '../application/ProductsFetcher';

type GetProductsRequest = Request & {
  query: {
    limit?: string;
    offset?: string;
  };
};
export class GetProducts extends Controller {
  private productsFetcher: ProductsFetcher;

  constructor(productsFetcher: ProductsFetcher) {
    super();
    this.productsFetcher = productsFetcher;
  }

  async run(req: GetProductsRequest, res: Response) {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const offset = req.query.offset ? parseInt(req.query.offset) : 0;

    try {
      const products = await this.productsFetcher.run(limit, offset);
      res.status(httpStatus.OK).send(products);
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
