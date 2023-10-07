import { json, urlencoded } from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import expressListRoutes from 'express-list-routes';
import Router from 'express-promise-router';
import helmet from 'helmet';
import * as http from 'http';
import httpStatus from 'http-status';
import morgan from 'morgan';

import { DependencyContainer } from './DependencyInjectionContainer';
import { registerRoutes as registerArticleRoutes } from './routes';
import { Logger } from './shared/infrastructure/logger/Logger';

const router = Router();

export default class Server {
  private express: express.Express;

  private port: string;

  private httpServer?: http.Server;

  private DIContainer: DependencyContainer;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(json());
    this.express.use(urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(
      cors({
        origin: '*',
        credentials: false
      })
    );

    const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms');
    this.express.use(morganMiddleware);

    this.express.use(compress());
    // TODO https://www.npmjs.com/package/typed-inject
    this.DIContainer = DependencyContainer.getInstance();

    router.get('/check-health', async (req: Request, res: Response) => {
      res.send('server running 💪');
    });

    registerArticleRoutes(router);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
    router.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
      Logger.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });

    this.express.use(router);
  }

  async start(): Promise<void> {
    Logger.info('  Connecting to DB... \n');
    await (await this.DIContainer.mongoClient).connect();
    Logger.info('  checking DB connection... \n');

    await (await this.DIContainer.mongoClient).db('admin').command({ ping: 1 });
    Logger.info('  DB Connected! \n');

    this.httpServer = await this.express.listen(this.port, () => {
      Logger.info(`  Routes loaded:`);

      expressListRoutes(this.express, { prefix: '' });

      Logger.info(`\n`);


      Logger.info(`  App is running at http://localhost:${this.port}`);
      Logger.info('  Press CTRL-C to stop\n');
    });

    return;
  }

  getHTTPServer() {
    return this.express;
  }

  async stop(): Promise<void> {
    Logger.info('  Closing DB connection...\n');
    (await this.DIContainer.mongoClient).close();

    Logger.info('  DB connection Close\n');

    return new Promise((resolve, reject) => {
      Logger.info('  stopping http server... \n');
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            Logger.error(error);

            return reject(error);
          }
          Logger.info('  Server stopped \n');

          return resolve();
        });
      }
    });
  }
}
