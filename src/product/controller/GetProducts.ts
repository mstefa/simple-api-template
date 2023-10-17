import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared/infrastructure/Controller';


export class GetProducts extends Controller {
  //	private Creator: Creator;

  constructor() {
    super();
    //		this.Creator = creator;
  }

  async run(req: Request, res: Response) {

    try {
      const products = [
        {
          id: "64326ad7-4615-415e-8e1a-4e42ee82680e",
          title: "test product 1",
          price: 13.5,
          description: "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
          image: "https://i.pravatar.cc/",
          category: "electronic"
        },
        {
          id: "76130669-11f2-42f5-829d-6c22d0440426",
          title: "test product 2",
          price: 100.52,
          description: "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
          image: "https://i.pravatar.cc/",
          category: "electronic"
        }
      ]
      res.status(httpStatus.OK).send(products);
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
