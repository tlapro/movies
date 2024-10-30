const app = require("./src/server")
const dbCon = require("./src/config/dbCon")
const port = 3000;

dbCon().then((res) => {
    app.listen(port, () => {
        console.log("Servidor escuchando en el puerto 3000"); 
    });
})
.catch(err => {
    console.log("Error al conectar a la base de datos");
})