export class UnauthorizedError extends Error {

  public static MESSAGE = 'An unauthorized error occurred!';

  constructor (message: string) {
    super(message);
    this.name = 'UnauthorizedError';
  }
}