import httpStatus from 'http-status';
import DomainError from '../../../Shared/Domain/Errors/DomainError';

export class EntityNotFoundError extends DomainError {
  constructor(message: string) {
    super(message, httpStatus.NOT_FOUND);
  }
}
