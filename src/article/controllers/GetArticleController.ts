import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from './Controller';

type AppPatchRequest = Request & {
  body: AppPatchRequest;
};

export class GetBlogPostController extends Controller {
  async run(req: AppPatchRequest, res: Response) {
    try {
      res.status(httpStatus.OK).send();
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
