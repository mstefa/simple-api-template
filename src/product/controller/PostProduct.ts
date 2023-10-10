import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared/infrastructure/Controller';
import { ProductDto } from '../dtos/ProductDto';

type PostProductRequest = Request & {
  body: ProductDto;
};

export class PostProduct extends Controller {
  //	private Creator: Creator;

  constructor() {
    super();
    //		this.Creator = creator;
  }

  async run(req: PostProductRequest, res: Response) {
    const { id, title, description, price, image, category } = req.body;
    try {
      await console.log(id, title, description, price, image, category)
      res.status(httpStatus.OK).send();
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
