import { Router } from 'express';
import { getUserProfile, getAllUsers, updateUser } from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

// GET /api/users/profile → Get current user's profile (protected)
router.get('/profile', authMiddleware, getUserProfile);

// PUT /api/users/profile → Update current user's profile (protected)
router.put('/profile', authMiddleware, updateUser);

// GET /api/users → Get list of users (admin-only, optional logic)
router.get('/', authMiddleware, getAllUsers);

export default router;