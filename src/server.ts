import { json, urlencoded } from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compress from 'compression';
import Router from 'express-promise-router';
import express, { Request, Response } from 'express';
import * as http from 'http';
import httpStatus from 'http-status';
import { Logger } from './shared/infrastructure/logger/Logger';
import { DependencyInjectionContainer as DependencyInjectionContainer } from './DependencyInjectionContainer';
import { registerRoutes as registerArticleRoutes } from './article/routes';

const router = Router();

export default class Server {
  private express: express.Express;

  private port: string;

  private httpServer?: http.Server;

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
    DependencyInjectionContainer.DependencyInjectionContainerLoad();

    router.get('/check-health', (req: Request, res: Response) => {
      res.send('server running 💪');
    });

    registerArticleRoutes(router);

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      Logger.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
    this.express.use(router);
  }

  async start(): Promise<void> {
    await (await DependencyInjectionContainer.mongoClient).db('admin').command({ ping: 1 });
    Logger.info('  DB Connected \n');

    this.httpServer = await this.express.listen(this.port, () => {
      Logger.info(`  App is running at http://localhost:${this.port}`);
      Logger.info('  Press CTRL-C to stop\n');
    });
    return;
  }

  getHTTPServer() {
    return this.express;
  }

  async stop(): Promise<void> {
    Logger.info('  Stopping server\n');
    (await DependencyInjectionContainer.mongoClient).close();

    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            Logger.error(error);
            return reject(error);
          }
          return resolve();
        });
      }
    });
  }
}
