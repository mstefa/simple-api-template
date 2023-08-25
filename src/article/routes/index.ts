import { Router, Request, Response, NextFunction } from 'express';
import { globSync } from 'glob';
import { ValidationError, validationResult } from 'express-validator';
import httpStatus from 'http-status';

async function register(routePath: string, router: Router) {
  const route = await import(routePath);
  route.register(router);
}

export function registerRoutes(router: Router) {
  const routes = globSync(`${__dirname}/**/*.route.*`);
  routes.map((route: string) => register(route, router));
}

export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    return next();
  }
  const errors = validationErrors.array().map((err: ValidationError) => ({ [err.type]: err.msg }));

  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    errors
  });
}
