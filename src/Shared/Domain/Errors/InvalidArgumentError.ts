import httpStatus from 'http-status';
import DomainError from '../../../Shared/Domain/Errors/DomainError';

export class InvalidArgumentError extends DomainError {
  constructor(message: string) {
    super(message, httpStatus.BAD_REQUEST);
  }
}
