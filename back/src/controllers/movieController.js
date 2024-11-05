const movieService = require("../services/movieService")
const catchAsync = require("../utils/catchAsync")

    getMovies = async (req, res) => {
       const movies = await movieService.getMovies();
       res.status(200).json(movies);
       }
   createMovie=  async (req, res) => {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const newMovie = await movieService.createMovie({ title, year, director, duration, genre, rate, poster });
        res.status(201).json({message: `${title} se ha guardado en la base de datos exitosamente.`, newMovie});
   }

module.exports = {
    getMovies: catchAsync(getMovies),
    createMovie: catchAsync(createMovie),
};