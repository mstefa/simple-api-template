import httpStatus from 'http-status';

import DomainError from './DomainError';

export class InvalidArgumentError extends DomainError {
  constructor(message: string) {
    super(message, httpStatus.BAD_REQUEST);
  }
}
