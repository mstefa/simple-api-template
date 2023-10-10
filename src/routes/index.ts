import { NextFunction, Request, Response, Router } from 'express';
import { validationResult } from 'express-validator';
import { globSync } from 'glob';
import httpStatus from 'http-status';

async function register(routePath: string, router: Router) {
  const route = await import(routePath);
  route.register(router);
}

export function registerRoutes(router: Router) {
  const routes = globSync(`${__dirname}/**/*.routes.*`);
  routes.map((route: string) => register(route, router));
}

export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    return next();
  }

  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json(validationErrors.array());
}
