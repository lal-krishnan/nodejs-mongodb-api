import { Router } from 'express';
import { login, register, getProfile } from '../controllers/auth.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

// POST /api/auth/register
router.post('/register', register);

// POST /api/auth/login
router.post('/login', login);

// GET /api/auth/profile (protected)
router.get('/profile', authMiddleware, getProfile);

export default router;