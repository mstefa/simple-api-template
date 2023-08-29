import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Logger } from '../../shared/infrastructure/logger/Logger';
import { ArticleGetter } from '../application/ArticleGetter';
import { Controller } from './Controller';


export class GetBlogPostController extends Controller {
  private articleGetter: ArticleGetter
  constructor(articleGetter: ArticleGetter) {
    super();
    this.articleGetter = articleGetter;
  }

  async run(req: Request, res: Response) {
    const id = req.params.id;
    Logger.info(`request received in ${req.path}`);
    try {
      const article = await this.articleGetter.run(id);
      res.status(httpStatus.OK).json(article);
    } catch (error) {
      this.errorHandling(error, res);
    }
  }
}

