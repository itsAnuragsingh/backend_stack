import express from 'express';
import {
    addMovie,
    getAllMovies,
    getMovieById,
    updateMovieById,
    deleteMovieById
} from '../controllers/movie.controller.js';
import isAuth from '../middleware/isAuth.middleware.js';
import isAdmin from '../middleware/isAdmin.middleware.js';

const router = express.Router();

router.post('/add', isAuth, isAdmin, addMovie);
router.get('/', isAuth, getAllMovies);
router.get('/:id', isAuth, getMovieById);
router.put('/:id', isAuth, isAdmin, updateMovieById);
router.delete('/:id', isAuth, isAdmin, deleteMovieById);

export default router;
