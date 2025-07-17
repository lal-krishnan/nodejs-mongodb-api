import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';

const router = Router();

// Base route: /api/auth
router.use('/auth', authRoutes);

// Base route: /api/users
router.use('/users', userRoutes);

export default router;