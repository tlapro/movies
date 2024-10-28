module.exports = {
    getAllMovies: (req, res) => {
        res
        .status(200)
        .send("La solicitud de las películas llego y se ejecutó con éxito.")
    }
}