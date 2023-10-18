import { Request, Response, Router } from 'express';
import { body, param, query } from 'express-validator';

import { DependencyContainer } from '../DependencyInjectionContainer';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  // TODO: add validator https://www.npmjs.com/package/zod

  const DIContainer = DependencyContainer.getInstance();

  const reqPostProductSchema = [
    body('id').exists().isUUID(),
    body('title').exists().isString(),
    body('description').exists().isString(),
    body('price').exists().isNumeric(),
    body('image').exists().isURL(),
    body('category').exists().isString(),
  ];


  const reqGetProductSchema = [param('id').exists().isUUID()];

  const reqGetProductsSchema = [
    query('limit').optional().isNumeric(),
    query('offset').optional().isNumeric()
  ];

  router.post('/product', reqPostProductSchema, validateReqSchema, (req: Request, res: Response) =>
    DIContainer.postProduct.run(req, res)
  );

  router.get('/product/:id', reqGetProductSchema, validateReqSchema, (req: Request, res: Response) =>
    DIContainer.getProduct.run(req, res)
  );

  router.get('/products', reqGetProductsSchema, validateReqSchema, (req: Request, res: Response) =>
    DIContainer.getProducts.run(req, res)
  );

};
