import mongoose from 'mongoose';

const theaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  ticketPrice: {
    type: Number,
    required: true,
    min: 0
  },
  seats: {
    type: Number,
    required: true,
    min: 1
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Theater = mongoose.model('Theater', theaterSchema);

export default Theater;