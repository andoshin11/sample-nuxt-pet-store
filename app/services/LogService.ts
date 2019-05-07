// FIXME: Use logging library specific interface
interface Logger {
  sendLog(params?: Error | string): void
}

export enum LogType {
  Error,
  Message
}

/* eslint-disable @typescript-eslint/indent */
type LogPayload =
  | {
      type: LogType.Error
      error: Error
    }
  | {
      type: LogType.Message
      message: string
    }
/* eslint-enable @typescript-eslint/indent */

export default class LogService implements BaseService {
  logger: Logger

  constructor(logger: Logger) {
    this.logger = logger
  }

  async handle(payload: LogPayload) {
    if (payload.type === LogType.Error) {
      this.logger.sendLog(payload.error)
    } else if (payload.type === LogType.Message) {
      this.logger.sendLog(payload.message)
    }
  }
}

export const LogServiceFactory = (): LogService => {
  const dummyLogger = {
    sendLog(params: Error) {
      console.log('/// logging with dummy logger ///')
      console.log(params)
    }
  }
  return new LogService(dummyLogger)
}
