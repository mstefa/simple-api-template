import { Request, Response, Router } from 'express';
import { body, param } from 'express-validator';

import { DependencyContainer } from '../DependencyInjectionContainer';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  // TODO: add validator https://www.npmjs.com/package/zod

  const DIContainer = DependencyContainer.getInstance();

  const reqPostArticleSchema = [
    body('id').exists().isUUID(),
    body('title').exists().isString(),
    body('description').exists().isString(),
    body('body').exists().isString(),
    body('date').exists().isISO8601(), //Date in format ISO8601
    body('authorEmail').exists().isEmail()
  ];

  const reqGetArticleSchema = [param('id').exists().isUUID()];

  router.post('/blog/article', reqPostArticleSchema, validateReqSchema, (req: Request, res: Response) =>
    DIContainer.createArticleController.run(req, res)
  );

  router.get('/blog/article/:id', reqGetArticleSchema, validateReqSchema, (req: Request, res: Response) =>
    DIContainer.getBlogPostController.run(req, res)
  );
};
