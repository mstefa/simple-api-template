import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared/infrastructure/Controller';
import { CartUpdater } from '../application/CartUpdater';
import { UpdateCartDto } from '../dtos/UpdateCartDto';

type PutCartRequest = Request & {
  body: UpdateCartDto;
};

export class PutCart extends Controller {
  private cartUpdater: CartUpdater;

  constructor(cartUpdater: CartUpdater) {
    super();
    this.cartUpdater = cartUpdater;
  }

  async run(req: PutCartRequest, res: Response) {
    const { userId, productId, quantity } = req.body;
    //const id = req.params.id;
    try {
      await this.cartUpdater.run({ userId, productId, quantity })
      res.status(httpStatus.OK).send();
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
