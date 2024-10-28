const { Router } = require("express");
const requestMovies = require("./requestMovies");

const router = Router();

router.use("/movies", requestMovies)

module.exports = router;