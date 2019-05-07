export enum ErrorType {
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403
}

class ErrorBase extends Error {
  msg: string
  type: ErrorType
  constructor(msg: string, type: ErrorType) {
    super(msg)
    this.name = this.constructor.name
    this.msg = msg
    this.type = type

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = new Error(msg).stack
    }
  }
}

export class NotFoundError extends ErrorBase {
  constructor(msg: string) {
    super(msg, ErrorType.NOT_FOUND)
  }
}

export class ForbiddenError extends ErrorBase {
  constructor(msg: string) {
    super(msg, ErrorType.FORBIDDEN)
  }
}
