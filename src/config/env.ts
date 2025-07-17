import dotenv from 'dotenv';
dotenv.config();

function required(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`❌ Missing required env var: ${key}`);
  return value;
}

export const env = {
  PORT: parseInt(process.env.PORT || '5000', 10),
  MONGO_URI: required('MONGO_URI'),
  MONGO_DB_NAME: process.env.MONGO_DB_NAME || 'devDB',
  JWT_SECRET: required('JWT_SECRET'),
  NODE_ENV: process.env.NODE_ENV || 'development',
};