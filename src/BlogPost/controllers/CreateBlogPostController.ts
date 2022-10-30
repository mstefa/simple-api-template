import { Controller } from './Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { BlogPostCreator } from '../application/BlogPostCreator';

type AppPatchRequest = Request & {
  body: AppPatchRequest;
};

export class CreateBlogPostController extends Controller {
  private blogPostCreator: BlogPostCreator;
  constructor(blogPostCreator: BlogPostCreator) {
    super();
    this.blogPostCreator = blogPostCreator;
  }

  async run(req: AppPatchRequest, res: Response) {
    const { title, description, body, date, authorEmail } = req.body;
    const id = req.params.id;

    try {
      await this.blogPostCreator.run({ id, title, description, body, date, authorEmail });
      res.status(httpStatus.OK).send();
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
