import { Request, Response, NextFunction } from 'express';

// Custom error interface (optional)
interface CustomError extends Error {
  status?: number;
  code?: string;
}

// Global error handling middleware
const errorMiddleware = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(`[Error] ${err.name}: ${err.message}`);

  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export default errorMiddleware;