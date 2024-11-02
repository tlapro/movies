const app = require("./src/server")
const dbCon = require("./src/config/dbCon")
const port = 3000;

dbCon().then((res) => {
    app.listen(port, () => {
        console.log("Servidor esperando solicitudes..."); 
    });
})
.catch(err => {
    console.log("Error al conectar a la base de datos");
})