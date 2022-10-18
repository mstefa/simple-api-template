import { Router, Request, Response } from 'express';
import { body, param } from 'express-validator';
import { validateReqSchema } from './';
import { DIC } from '../../DependencyInjectionContainer';

export const register = (router: Router) => {
  const reqSchema = [
    param('id').exists().isString(),
    body('title').exists().isString(),
    body('description').exists().isString(),
    body('body').exists().isString(),
    body('date').exists().isISO8601(), //Date in format ISO8601
    body('authorEmail').exists().isEmail()
  ];

  router.post('/blogpost/:id', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    DIC.createBlogPostController.run(req, res)
  );
};
