import { ZodError } from 'zod';
import statusCode from 'http-status-codes';

export function validateBody(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(statusCode.BAD_REQUEST).json({ error: 'Invalid data', details: buildErrorMessages(error.errors) });
      } else {
        res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
      }
    }
  };
}

export function validatePartialBody(schema) {
  return (req, res, next) => {
    try {
      req.body = schema.partial().parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(statusCode.BAD_REQUEST).json({ error: 'Invalid data', details: buildErrorMessages(error.errors) });
      } else {
        res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
      }
    }
  };
}

function buildErrorMessages(errors) {
  return errors.map((issue) => ({
    message: `${issue.path} is ${issue.message}`
  }));
}
