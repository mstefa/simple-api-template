import httpStatus from 'http-status';

export class DomainError extends Error {
  readonly message: string;
  readonly httpStatus: number;

  constructor(message: string, httpStatus: number) {
    super();
    this.message = message;
    this.httpStatus = httpStatus;
  }
}

export class EntityNotFoundError extends DomainError {
  constructor(message: string) {
    super(message, httpStatus.NOT_FOUND);
  }
}
