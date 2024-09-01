import mongoose from 'mongoose';
import Theater from '../models/theater.model.js';
import asyncHandler from 'express-async-handler';

// Get all theaters
export const getAllTheaters = asyncHandler(async (req, res) => {
  const theaters = await Theater.find();
  res.json(theaters);
});

// Get a single theater by ID
export const getTheaterById = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error('Invalid Theater ID');
  }

  const theater = await Theater.findById(req.params.id);
  if (theater) {
    res.json(theater);
  } else {
    res.status(404);
    throw new Error('Theater not found');
  }
});

// Create a new theater
export const createTheater = asyncHandler(async (req, res) => {
  const { name, city, ticketPrice, seats, image } = req.body;

  const theater = new Theater({
    name,
    city,
    ticketPrice,
    seats,
    image
  });

  const createdTheater = await theater.save();
  res.status(201).json(createdTheater);
});

// Update a theater
export const updateTheater = asyncHandler(async (req, res) => {
  const { name, city, ticketPrice, seats, image } = req.body;

  const theater = await Theater.findById(req.params.id);

  if (theater) {
    theater.name = name || theater.name;
    theater.city = city || theater.city;
    theater.ticketPrice = ticketPrice || theater.ticketPrice;
    theater.seats = seats || theater.seats;
    theater.image = image || theater.image;

    const updatedTheater = await theater.save();
    res.json(updatedTheater);
  } else {
    res.status(404);
    throw new Error('Theater not found');
  }
});

// Delete a theater
export const deleteTheater = asyncHandler(async (req, res) => {
  const theater = await Theater.findById(req.params.id);

  if (theater) {
    await theater.remove();
    res.json({ message: 'Theater removed' });
  } else {
    res.status(404);
    throw new Error('Theater not found');
  }
});