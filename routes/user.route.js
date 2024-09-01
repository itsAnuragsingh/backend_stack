// routes/userRoutes.js

import express from 'express';
import isAuth from '../middleware/isAuth.middleware.js';
import {
    registerUser,
    loginUser,
    logOutUser,
    getUserProfile
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', isAuth, logOutUser);
router.get('/profile', isAuth, getUserProfile);

export default router;
