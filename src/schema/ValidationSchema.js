const { ZodError } = require('zod');
const { StatusCodes } = require('http-status-codes');

function validateBody(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: buildErrorMessages(error.errors) });
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
      }
    }
  };
}

function validatePartialBody(schema) {
  return (req, res, next) => {
    try {
      req.body = schema.partial().parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: buildErrorMessages(error.errors) });
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
      }
    }
  };
}

function buildErrorMessages(errors) {
  return errors.map((issue) => ({
    message: `${issue.path} is ${issue.message}`
  }));
}

module.exports = { validateBody, validatePartialBody };
