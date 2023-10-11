import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from '../../shared-d/infrastructure/Controller';
import { ArticleCreator } from '../application/ArticleCreator';
import { Article } from '../domain/Article';

type ArticleRequest = Request & {
  body: Article;
};

export class PostArticleController extends Controller {
  private articleCreator: ArticleCreator;

  constructor(blogPostCreator: ArticleCreator) {
    super();
    this.articleCreator = blogPostCreator;
  }

  async run(req: ArticleRequest, res: Response) {
    const { id, title, description, body, date, authorEmail } = req.body;

    try {
      await this.articleCreator.run({ id, title, description, body, date, authorEmail });
      res.status(httpStatus.OK).send();
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}
