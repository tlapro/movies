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
    // getMovies: async () => {
    // try{
    //     const data = await axios.get("https://students-api.up.railway.app/movies");
    //     const movieData = data.data;
    //     const movies = movieData.map(movie => new Movie(movie));
    //     return movies;
    // } catch(err) {
    //     throw new Error('Error al obtener las películas desde la API externa'); 
    // }
    // }

