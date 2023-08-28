import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Logger } from '../../shared/infrastructure/logger/Logger';
import { ArticleCreator } from '../application/ArticleCreator';
import { Controller } from './Controller';

type AppPostRequest = Request & {
  body: AppPostRequest;
};

export class PostArticleController extends Controller {
  private blogPostCreator: ArticleCreator;
  constructor(blogPostCreator: ArticleCreator) {
    super();
    this.blogPostCreator = blogPostCreator;
  }

  async run(req: AppPostRequest, res: Response) {
    const { id, title, description, body, date, authorEmail } = req.body;
    Logger.info(`request recibed in ${req.path}`);

    try {
      await this.blogPostCreator.run({ id, title, description, body, date, authorEmail });
      res.status(httpStatus.OK).send();
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
