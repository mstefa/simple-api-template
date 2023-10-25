import { Request, Response, Router } from 'express';
import { body } from 'express-validator';

import { DependencyContainer } from '../DependencyInjectionContainer';
import { validateReqSchema } from '.';

export const register = (router: Router) => {

  const DIContainer = DependencyContainer.getInstance();

  const putCartSchema = [
    body('userId').exists().isString(),
    body('productId').exists().isString(),
    body('quantity').exists().isNumeric(),
  ];


  router.put('/cart/product', putCartSchema, validateReqSchema, (req: Request, res: Response) =>
    DIContainer.putCart.run(req, res)
  );

};
