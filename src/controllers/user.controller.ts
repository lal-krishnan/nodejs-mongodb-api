import { Request, Response } from 'express';
import User from '../models/user.model';

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $set: req.body },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User updated', user });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve users', error: err });
  }
};
