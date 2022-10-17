import { json, urlencoded } from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';
// import { Controller } from './controllers/Controller';
import Router from 'express-promise-router';
import express, { Request, Response } from 'express';
// import { ValidationError, validationResult } from 'express-validator';
import * as http from 'http';
import httpStatus from 'http-status';
// import { CreateBlogPostController } from './BlogPost/controllers/CreateBlogPostController';
import { Logger } from './Shared/infrastructure/logger/Logger';
// import { BlogPostCreator } from './BlogPost/application/BlogPostCreator';
import { DIC } from './DependecyInjectionContainer';
// import BlogPostRoutes from './BlogPost/routes';
import { registerRoutes as registerBlogPostRoutes } from './BlogPost/routes';

// import { MongoClient } from 'mongodb';
// import { MongoClientFactory } from './shared/infrastructure/mongo/MongoClientFactory';

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

    this.express.use(compress());

    DIC.DICLoad();

    router.get('/status', (req: Request, res: Response) => {
      res.send('server running 💪');
    });

    registerBlogPostRoutes(router);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types
    router.use((err: Error, req: Request, res: Response, next: Function) => {
      Logger.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
    this.express.use(router);
  }

  async start(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        Logger.info(` App is running at http://localhost:${this.port}`);
        Logger.info('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    // (await this.mongoClient).close();

    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
    });
  }
}

// export function validateReqSchema(req: Request, res: Response, next: Function) {
//   const validationErrors = validationResult(req);
//   if (validationErrors.isEmpty()) {
//     return next();
//   }
//   const errors = validationErrors.array().map((err: ValidationError) => ({ [err.param]: err.msg }));

//   return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
//     errors
//   });
// }
