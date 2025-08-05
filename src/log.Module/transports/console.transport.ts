import { ITransport, LogData, LogLevel } from '../interfaces';

/**
 * Транспорт для вывода логов в консоль с форматированием и цветами.
 * Использует нативные ANSI escape-коды для окрашивания, без сторонних библиотек.
 */
export class ConsoleTransport implements ITransport {
  // Инкапсуляция: ANSI-коды для цветов определены как приватные константы
  private readonly colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    gray: "\x1b[90m",
  };

  private readonly levelColorMap: Record<LogLevel, string> = {
    [LogLevel.DEBUG]: this.colors.gray,
    [LogLevel.INFO]: this.colors.cyan,
    [LogLevel.WARN]: this.colors.yellow,
    [LogLevel.ERROR]: this.colors.red,
  };

  public log(data: LogData): void {
    const color = this.levelColorMap[data.level] || this.colors.reset;
    const levelStr = LogLevel[data.level].padEnd(5, ' ');

    // Формируем цветную строку с помощью ANSI-кодов
    const timestamp = `${this.colors.gray}${data.timestamp}${this.colors.reset}`;
    const level = `${color}${levelStr}${this.colors.reset}`;
    const filePath = `${this.colors.green}${data.filePath}${this.colors.reset}`;
    const message = `${color}${data.message}${this.colors.reset}`;

    const formattedMessage = `${timestamp} | ${level} | ${filePath} | ${message}`;
    
    console.log(formattedMessage);

    if (data.meta) {
      console.log(`${this.colors.gray}Meta:${this.colors.reset}`, data.meta);
    }

    if (data.stack) {
      console.log(`${this.colors.red}${data.stack}${this.colors.reset}`);
    }
  }
}