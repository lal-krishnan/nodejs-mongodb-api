import mongoose from 'mongoose';
import { env } from './env';

const connectDB = async () => {
  try {
    const uri = `${env.MONGO_URI}/${env.MONGO_DB_NAME}`;
    await mongoose.connect(uri);
    console.log(`✅ Connected to MongoDB database: ${uri}`);
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
