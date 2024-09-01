import mongoose from 'mongoose';

const showtimeSchema = new mongoose.Schema({
  ticketPrice: {
    type: Number,
    required: true,
    min: 0
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  theater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theater',
    required: true
  }
}, { timestamps: true });

const Showtime = mongoose.model('Showtime', showtimeSchema);
export default Showtime;