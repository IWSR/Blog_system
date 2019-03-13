class HTTPBaseError extends Error {
  public httpStatusCode: number;
  public httpMsg: string;
  public errCode: number;

  constructor(httpStatusCode: number, httpMsg: string, errCode: number, msg: string) {
    super(`HTTP ERROR: ${msg}`);
    this.httpStatusCode = httpStatusCode;
    this.httpMsg = httpMsg;
    this.errCode = errCode;
  }
}

export default HTTPBaseError;
