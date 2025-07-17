import mongoose, { Schema, Document } from 'mongoose';

// TypeScript interface for the User document
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema definition
const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Export model
const User = mongoose.model<IUser>('User', userSchema);
export default User;