import express from 'express';
import {
  getAllTheaters,
  getTheaterById,
  createTheater,
  updateTheater,
  deleteTheater
} from '../controllers/theater.controller.js';

const router = express.Router();

router.route('/').get(getAllTheaters).post(createTheater);
router.route('/:id').get(getTheaterById).put(updateTheater).delete(deleteTheater);

export default router;