const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    duration: String,
    director: String,
    genre: Array,
    rate: String,
    poster: String,
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;