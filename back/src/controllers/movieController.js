const movieService = require("../services/movieService")
const catchAsync = require("../utils/catchAsync")

    getMovies = async (req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.status(200).json(movies);
        } catch(err) {
            res.status(400).send({message: "Hubo un error al obtener las películas"});
        }
       }
   createMovie =  async (req, res) => {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const newMovie = await movieService.createMovie({ title, year, director, duration, genre, rate, poster });
        res.status(201).json({message: `${title} se ha guardado en la base de datos exitosamente.`, newMovie});
    } catch(err) {
        res.status(400).send({message: "Hubo un error al crear la película"});
    }
   }

module.exports = {
    getMovies,
    createMovie,
};