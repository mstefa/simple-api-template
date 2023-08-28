import httpStatus from 'http-status';

import DomainError from './DomainError';

export class EntityNotFoundError extends DomainError {
  constructor(message: string) {
    super(message, httpStatus.NOT_FOUND);
  }
}
