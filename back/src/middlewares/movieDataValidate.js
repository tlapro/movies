validateMovie = async (req, res, next) => {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const directorRegex = /^[A-Za-z\,]+(?:\s[A-Za-z\,]+)+$/;
        const timePattern = /^\d+H\s?\d{1,2}min$/i;
        const validRate = /^(10(\.0{0,1})?|[0-9](\.\d{0,2})?)$/;
        const imageUrlPattern = /^(http|https):\/\/.*\.(jpeg|jpg|gif|png|bmp|webp|svg)$/i;

        if (!title || !year || !director || !duration || !genre || !rate || !poster) return res.status(400).json({ error: "Todos los campos son obligatorios"});

        if (typeof title !== 'string' || title.trim() === '') return res.status(400).json({ error: "El título es erróneo o no se ha completado" });
            
        if (isNaN(year) || year < 1921 || year >= 2025 ) return res.status(400).json({ error: "El año debe ser mayor a 1921 y menor o igual al actual" });
        
        if (!directorRegex.test(director)) return res.status(400).json({ error: "El director debe completarse con nombre y apellido." });

        if (!Array.isArray(genre) || genre.length === 0) return res.status(400).json({ error: "Ningún género recibido" });
    
        if (!timePattern.test(duration)) return res.status(400).json({ error: "La hora debe tener formato 'Xh XXmin'." });

        if (!validRate.test(rate)) return res.status(400).json({ error: "El rate debe tener el formato X.X/X.XX." });        
        
        if (!imageUrlPattern.test(poster)) return res.status(400).json({ error: "La URL ingresada no es válida." });
                  
        
        next();
        
    } catch(err) {
        res.status(500).json({ error: "Surgió un error con la base de datos" });
    }
}


module.exports = validateMovie;
    
