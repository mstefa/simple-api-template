import { Request, Response } from 'express';
import httpStatus from 'http-status';
import DomainError from '../../Shared/Domain/Errors/DomainError';

export abstract class Controller {
  abstract run(req: Request, res: Response): Promise<void>;

  protected errorHandling(error: unknown, res: Response) {
    console.error(error);
    if (error instanceof DomainError) {
      res.status(error.httpStatus).send({ message: error.message });
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
  }
}
