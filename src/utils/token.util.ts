import jwt from 'jsonwebtoken';
import { env } from '../config/env';

interface TokenPayload {
  userId: string;
  email?: string;
  role?: string;
}

const EXPIRES_IN = '7d'; // or set from env

/**
 * Generate a JWT token
 */
export const generateToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: EXPIRES_IN });
};

/**
 * Verify a JWT token
 */
export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, env.JWT_SECRET) as TokenPayload;
};