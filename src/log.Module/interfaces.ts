// Абстракция: Определяем ключевые структуры и контракты

/**
 * Уровни логирования
 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

/**
 * Структура объекта лога, передаваемого в транспорты
 */
export interface LogData {
  timestamp: string;
  level: LogLevel;
  levelName: string;
  message: string;
  filePath: string;
  meta?: any;
  stack?: string;
}

/**
 * Интерфейс для всех транспортов (Полиморфизм)
 * Каждый транспорт должен реализовывать этот контракт.
 * Метод log может быть синхронным или асинхронным.
 */
export interface ITransport {
  log(data: LogData): void | Promise<void>;
}

/**
 * Опции для конфигурации экземпляра логгера
 */
export interface LoggerOptions {
  level: LogLevel;
  transports: ITransport[];
}