import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared/infrastructure/Controller';

type GetProductRequest = Request & {
  params: unknown,
};

export class GetProduct extends Controller {
  //	private Creator: Creator;

  constructor() {
    super();
    //		this.Creator = creator;
  }

  async run(req: GetProductRequest, res: Response) {
    const id = req.params.id;
    try {
      await console.log('doing something')
      console.log(id)
      const product = {
        id: "17e9764e-b851-4a2a-87ca-0b7315e61330",
        title: "test product",
        price: 13.5,
        description: "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
        image: "https://i.pravatar.cc/",
        category: "electronic"
      }
      res.status(httpStatus.OK).send(product);
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
