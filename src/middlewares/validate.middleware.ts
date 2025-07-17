import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

/**
 * Middleware factory that validates the request body against a Zod schema.
 */
const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.format();
      return res.status(400).json({
        message: 'Validation failed',
        errors,
      });
    }

    req.body = result.data; // now typed and validated
    next();
  };

export default validate;
