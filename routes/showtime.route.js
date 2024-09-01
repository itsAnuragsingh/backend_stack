import express from 'express';
import {
  getAllShowtimes,
  getShowtimeById,
  createShowtime,
  updateShowtime,
  deleteShowtime,
  getShowtimesByMovie,
  getShowtimesByTheater
} from '../controllers/showtime.controller.js';
import isAuth from '../middleware/isAuth.middleware.js';
import isAdmin from '../middleware/isAdmin.middleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllShowtimes);
router.get('/:id', getShowtimeById);
router.get('/movie/:movieId', getShowtimesByMovie);
router.get('/theater/:theaterId', getShowtimesByTheater);

// Protected routes (require authentication)
router.use(isAuth);

// Admin only routes
router.use(isAdmin);
router.post('/', createShowtime);
router.put('/:id', updateShowtime);
router.delete('/:id', deleteShowtime);

export default router;