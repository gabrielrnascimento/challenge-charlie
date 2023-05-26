export class UnexpectedError extends Error {

  public static MESSAGE = 'An unexpected error occurred!';

  constructor (message: string) {
    super(message);
    this.name = 'UnexpectedError';
  }
}