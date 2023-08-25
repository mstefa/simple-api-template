import { Router, Request, Response } from 'express';
import { body, param } from 'express-validator';
import { validateReqSchema } from '.';
import { DependencyInjectionContainer } from '../../DependencyInjectionContainer';

export const register = (router: Router) => {
  // TODO: add validator https://www.npmjs.com/package/zod

  const reqPostArticleSchema = [
    body('id').exists().isString(),
    body('title').exists().isString(),
    body('description').exists().isString(),
    body('body').exists().isString(),
    body('date').exists().isISO8601(), //Date in format ISO8601
    body('authorEmail').exists().isEmail()
  ];

  const reqGetArticleSchema = [param('id').exists().isString()];

  router.post('/blog/article', reqPostArticleSchema, validateReqSchema, (req: Request, res: Response) =>
    DependencyInjectionContainer.createArticleController.run(req, res)
  );

  router.get('/blog/article/{id}', reqGetArticleSchema, validateReqSchema, (req: Request, res: Response) =>
    DependencyInjectionContainer.createArticleController.run(req, res)
  );
};
