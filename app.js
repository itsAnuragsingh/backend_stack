import express from 'express';
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import connectDB from './lib/mongoose.js';
import theaterRoutes from './routes/theater.route.js';
import showtimeRoutes from './routes/showtime.route.js';
import userRoute from './routes/user.route.js';
import movieRoute from './routes/movie.route.js';
dotenv.config();
const app = express();

// Connect to database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/theaters', theaterRoutes);
app.use('/api/showtimes', showtimeRoutes);

app.get('/', (req, res) => {
    res.send('welcome');
}
)

// ... other middleware and route setup

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
