const movieService = require("../services/movieService")

module.exports = {
    getMovies: async (req, res) => {
     try {
        const movies = await movieService.getMovies();
        res.status(200).json(movies);
    } catch(error) {
        res.status(500).json({
            error:"Error al obtener las películas."
        })
        }  
    },
    createMovie: async (req, res) => {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        try {
            const newMovie = await movieService.createMovie({ title, year, director, duration, genre, rate, poster });
            res.status(201).json(newMovie);
        } catch(error) {
            res.status(500).json({
                error: "Error al crear la película"
            });
        }
    }
}