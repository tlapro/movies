const axios = require("axios");
class Movie {
    constructor({ title, poster, director, year, duration, genre, rate }) {

        if (!title || !poster || !director) {
            throw new Error("Las propiedades 'title', 'poster' y 'director' son obligatorias.");
        }
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

module.exports = {
    
    getMovies: async () => {
    try{
        const data = await axios.get("https://students-api.up.railway.app/movies");
        const movieData = data.data;
        const movies = movieData.map(movie => new Movie(movie));
        return movies;
    } catch(err) {
        throw new Error('Error al obtener las películas desde la API externa'); 
    }
    }

}