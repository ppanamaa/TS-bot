import { LogLevel, LoggerOptions, LogData, ITransport } from './interfaces';

/**
 * Основной класс логгера.
 * Инкапсулирует логику определения уровня, сбора данных и передачи их транспортам.
 */
export class Logger {
  private readonly minLevel: LogLevel;
  private readonly transports: ITransport[];

  constructor(options: LoggerOptions) {
    this.minLevel = options.level;
    this.transports = options.transports;
  }

  public debug(message: string, meta?: any): void {
    this.log(LogLevel.DEBUG, message, meta);
  }

  public info(message: string, meta?: any): void {
    this.log(LogLevel.INFO, message, meta);
  }

  public warn(message: string, meta?: any): void {
    this.log(LogLevel.WARN, message, meta);
  }

  public error(message: string | Error, meta?: any): void {
    if (message instanceof Error) {
      this.log(LogLevel.ERROR, message.message, meta, message.stack);
    } else {
      this.log(LogLevel.ERROR, message, meta);
    }
  }

  private log(level: LogLevel, message: string, meta?: any, stack?: string): void {
    if (level < this.minLevel) {
      return;
    }

    const logData: LogData = {
      timestamp: new Date().toISOString(),
      level,
      levelName: LogLevel[level],
      message,
      filePath: this.getCallerFilePath(),
      meta,
      stack,
    };

    Promise.all(this.transports.map(transport => transport.log(logData)))
      .catch(err => {
        console.error('FATAL: Logging to a transport failed.', err);
      });
  }

  private getCallerFilePath(): string {
    const error = new Error();
    const stack = error.stack || '';
    const stackLines = stack.split('\n');

    if (stackLines.length > 4) {
      const callerLine = stackLines[4];
      const match = callerLine.match(/\((.*?):\d+:\d+\)$/);
      if (match && match[1]) {
        return match[1].replace(process.cwd() + '/', '');
      }
    }
    return 'unknown file';
  }
}