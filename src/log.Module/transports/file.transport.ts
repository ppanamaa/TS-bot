import * as fs from 'fs/promises';
import * as path from 'path';
import { ITransport, LogData, LogLevel } from '../interfaces';

/**
 * Транспорт для записи логов в файлы.
 * Создает отдельную директорию для каждого запуска.
 * Пишет все логи в app.log и ошибки в error.log.
 */
export class FileTransport implements ITransport {
  private logDirectory: string;
  private appLogPath: string;
  private errorLogPath: string;

  constructor(baseDir: string = 'logs') {
    // Создаем уникальную директорию для текущего сеанса
    const runTimestamp = new Date().toISOString().replace(/[:.]/g, '-');
    this.logDirectory = path.join(process.cwd(), baseDir, runTimestamp);
    
    this.appLogPath = path.join(this.logDirectory, 'app.log');
    this.errorLogPath = path.join(this.logDirectory, 'error.log');

    this.initialize();
  }

  private async initialize(): Promise<void> {
    try {
      await fs.mkdir(this.logDirectory, { recursive: true });
    } catch (error) {
      console.error('Failed to create log directory:', error);
    }
  }

  public async log(data: LogData): Promise<void> {
    const logEntry = JSON.stringify(data) + '\n';

    try {
      // Записываем все логи в общий файл
      await fs.appendFile(this.appLogPath, logEntry);

      // Если уровень - ошибка, дублируем в файл ошибок
      if (data.level === LogLevel.ERROR) {
        await fs.appendFile(this.errorLogPath, logEntry);
      }
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
  }
}