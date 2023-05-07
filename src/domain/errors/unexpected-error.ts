export class UnexpectedError extends Error {
  /* istanbul ignore next */
  constructor () {
    super('An unexpected error occurred!');
    this.name = 'UnexpectedError';
  }
}