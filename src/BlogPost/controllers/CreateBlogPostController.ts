import { Controller } from './Controller';
import { Request, Response } from 'express';
// import httpStatus from 'http-status';
import { EntityNotFoundError } from '../domain/errors';

type AppPatchRequest = Request & {
  body: AppPatchRequest;
};

export class CreateBlogPostController extends Controller {
  constructor() {
    super();
  }

  async run(req: AppPatchRequest, res: Response) {
    try {
      console.log(req.body);
      // res.status(httpStatus.OK).send();
      throw new EntityNotFoundError('no lo encontre');
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
