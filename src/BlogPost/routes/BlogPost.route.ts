import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { validateReqSchema } from '.';
import { DIC } from '../../DependecyInjectionContainer';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('duration').exists().isString()
  ];

  router.put('/courses/:id', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    DIC.createBlogPostController.run(req, res)
  );
};
