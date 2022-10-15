import { createLogger, format, transports } from 'winston';
import config from '../../config/appConfig';

export class Logger {
  private static WinstonLogger = createLogger({
    format: format.combine(format.label({ label: config.app.name }), format.timestamp(), format.json()),
    transports: [new transports.Console()]
  });

  static debug(message: string) {
    this.WinstonLogger.debug(message);
  }

  static info(message: string) {
    this.WinstonLogger.info(message);
  }

  static warn(message: string) {
    this.WinstonLogger.warn(message);
  }

  static error(message: unknown) {
    this.WinstonLogger.error(message);
  }
}
