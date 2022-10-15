import { Controller } from './Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
type AppPatchRequest = Request & {
  body: AppPatchRequest;
};

export class GetBlogPostController implements Controller {
  async run(req: AppPatchRequest, res: Response) {
    try {
      res.status(httpStatus.OK).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
