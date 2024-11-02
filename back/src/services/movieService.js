const axios = require("axios");
const Movie = require("../models/Movie");

module.exports = {
    getMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch(err) {
            err("Error al obtener las películas desde la BDD.")
        }
    },
    createMovie: async (movieData) => {
        try {
            const newMovie = await Movie.create(movieData);
            return newMovie;
        } catch(err) {
            err("Error al crear las películas.");
        }
    }
}
