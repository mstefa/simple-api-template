export default class DomainError extends Error {
  readonly message: string;
  readonly httpStatus: number;

  constructor(message: string, httpStatus: number) {
    super();
    this.message = message;
    this.httpStatus = httpStatus;
  }
}
