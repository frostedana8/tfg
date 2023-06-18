"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const database = require('./database/mysqlconnection');
const port = 3000;
//ejemplo
/* app.get('/', (req, res) => {
  res.send('Hello World!');
}); */
const url = "https://www.omdbapi.com/?i=tt";
const apiKey = "&apikey=feec4bd5";
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/peliculaById', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://frontend:51621');
    //escojo la pelicula aleatoria
    const filaPelicula = Math.floor(Math.random() * 3);
    //uso el objeto database que lo tengo en otro archivo que me hace la conexion y luego la consulta
    database.query(
    //limit, primer numero es la cantidad de filas que voy a saltar y el segundo la cantidad de filas que voy a seleccionar
    'SELECT * FROM `peliculaIds` limit ' + filaPelicula + ', 1', function (err, results, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const idPelicula = results[0].idPelicula;
            const response = yield fetch(url + idPelicula + apiKey); //consulta
            const data = yield response.json(); //lo guardo en data
            res.send(data); //envio al frontend
        });
    });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map