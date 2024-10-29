const movieService = require("../services/movieService")

module.exports = {
    getMovies: async (req, res) => {
     try {
        const movies = await movieService.getMovies();
        res.status(200).json(movies);
    } catch(error) {
        req.status(500).json({
            error:"Error al obtener las películas."
        })
        }  
    }
}