/**
 * Публичный API модуля. Экспортируем только то, что нужно пользователю.
 */
export { Logger } from './logger';
export { ConsoleTransport } from './transports/console.transport';
export { FileTransport } from './transports/file.transport';
export { LogLevel, ITransport, LoggerOptions } from './interfaces';