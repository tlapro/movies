const { Router } = require("express");
const movieController = require("../controllers/movieController");
const validateMovie = require("../middlewares/movieDataValidate")

const movieRouter = Router();

movieRouter.get("/", movieController.getMovies);

movieRouter.post("/", validateMovie, movieController.createMovie);

module.exports = movieRouter;