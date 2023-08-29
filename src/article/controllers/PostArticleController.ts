import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Logger } from '../../shared/infrastructure/logger/Logger';
import { ArticleCreator } from '../application/ArticleCreator';
import { Article } from '../domain/Article';
import { Controller } from './Controller';

type ArticleRequest = Request & {
  body: Article;
};

export class ArticleController extends Controller {
  private articleCreator: ArticleCreator;

  constructor(blogPostCreator: ArticleCreator) {
    super();
    this.articleCreator = blogPostCreator;
  }

  async run(req: ArticleRequest, res: Response) {
    const { id, title, description, body, date, authorEmail } = req.body;
    Logger.info(`request recibed in ${req.path}`);

    try {
      await this.articleCreator.run({ id, title, description, body, date, authorEmail });
      res.status(httpStatus.OK).send();
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
