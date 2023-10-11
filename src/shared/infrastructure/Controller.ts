import { Request, Response } from 'express';
import httpStatus from 'http-status';

import DomainError from '../domain/errors/DomainError';
import { Logger } from './logger/Logger';

export abstract class Controller {
  abstract run(req: Request, res: Response): Promise<void>;

  protected errorHandling(error: unknown, res: Response) {
    Logger.error(error);
    if (error instanceof DomainError) {
      res.status(error.httpStatus).send({ message: error.message });
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
  }
}
