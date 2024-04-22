import express from "express";
import path from "path";
import dotenv from "dotenv";
import conexionMongo from "./src/config/baseDatos.js";


const app = express();
const puerto = 6000;

dotenv.config();

conexionMongo(); 


const rutaPublica = path.join(process.cwd(),"public");

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`);
    
    app.use(express.static(rutaPublica));

app.use(express.json());

app.get("/", (req,res) => {
    res.sendFile(path.join(rutaPublica, "index.html" ))
});

});


