import Showtime from '../models/showtime.model.js';
import asyncHandler from 'express-async-handler';

export const getAllShowtimes = asyncHandler(async (req, res) => {
  const showtimes = await Showtime.find().populate('movie').populate('theater');
  res.json(showtimes);
});

export const getShowtimeById = asyncHandler(async (req, res) => {
  const showtime = await Showtime.findById(req.params.id).populate('movie').populate('theater');
  if (showtime) {
    res.json(showtime);
  } else {
    res.status(404);
    throw new Error('Showtime not found');
  }
});

export const createShowtime = asyncHandler(async (req, res) => {
  const { ticketPrice, startDate, endDate, movie, theater } = req.body;

  const showtime = new Showtime({
    ticketPrice,
    startDate,
    endDate,
    movie,
    theater
  });

  const createdShowtime = await showtime.save();
  res.status(201).json(createdShowtime);
});

export const updateShowtime = asyncHandler(async (req, res) => {
  const { ticketPrice, startDate, endDate, movie, theater } = req.body;

  const showtime = await Showtime.findById(req.params.id);

  if (showtime) {
    showtime.ticketPrice = ticketPrice || showtime.ticketPrice;
    showtime.startDate = startDate || showtime.startDate;
    showtime.endDate = endDate || showtime.endDate;
    showtime.movie = movie || showtime.movie;
    showtime.theater = theater || showtime.theater;

    const updatedShowtime = await showtime.save();
    res.json(updatedShowtime);
  } else {
    res.status(404);
    throw new Error('Showtime not found');
  }
});

export const deleteShowtime = asyncHandler(async (req, res) => {
  const showtime = await Showtime.findById(req.params.id);

  if (showtime) {
    await showtime.deleteOne(); // Changed from remove() to deleteOne()
    res.json({ message: 'Showtime removed' });
  } else {
    res.status(404);
    throw new Error('Showtime not found');
  }
});

export const getShowtimesByMovie = asyncHandler(async (req, res) => {
  const showtimes = await Showtime.find({ movie: req.params.movieId }).populate('theater');
  res.json(showtimes);
});

export const getShowtimesByTheater = asyncHandler(async (req, res) => {
  const showtimes = await Showtime.find({ theater: req.params.theaterId }).populate('movie');
  res.json(showtimes);
});