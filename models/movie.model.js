// models/Movie.js

import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
         type: String, 
         required: true 
     },
    description: { 
        type: String 
    },
    director: { type: String },
    cast: [{ type: String }],
    duration: { 
        type: Number,
         required: true 
        }, 
    genre: { 
        type: String, 
        required: true 
    },
    releaseDate: { 
        type: Date, 
        required: true 
    },
    language: { 
        type: String,
         required: true 
        }
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;