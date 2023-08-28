import { createLogger, format, transports } from 'winston';
// import  'winston-daily-rotate-file';
// import appConfig from '../../config/appConfig';

export class Logger {
  private static WinstonConsoleLogger = createLogger({
    format: format.combine(format.colorize(), format.simple()),
    transports: [new transports.Console({ level: 'debug' })]
  });

  // Decoment this lines to create a file logger.
  // private static WinstonFileLogger = createLogger({
  //   format: format.combine(
  //     format.label({ label: appConfig.app.name }),
  //     format.timestamp(),
  //     format.json()
  //   ),
  //   transports: [
  //     new winston.transports.DailyRotateFile({
  //       filename: './logs/application-%DATE%.log',
  //       datePattern: 'YYYY-MM-DD-HH',
  //       zippedArchive: true,
  //       maxSize: '20m',
  //       maxFiles: '14d',

  //     })
  //   ]
  // });

  static debug(message: string) {
    this.WinstonConsoleLogger.log('debug', message);
  }

  static info(message: string) {
    this.WinstonConsoleLogger.log('info', message);
  }

  static warn(message: string) {
    this.WinstonConsoleLogger.log('warn', message);
  }

  static error(error: Error | unknown) {
    if (error instanceof Error) {
      this.WinstonConsoleLogger.error(`${error?.message} :  ${error.stack} `);

      return;
    }
    this.WinstonConsoleLogger.error(error);
  }
}
