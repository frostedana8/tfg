import express from 'express';
const app = express();
const database = require('./database/mysqlconnection');

const port = 3000;

//ejemplo
/* app.get('/', (req, res) => {
  res.send('Hello World!');
}); */

const url:string="https://www.omdbapi.com/?i=tt";
const apiKey:string="&apikey=feec4bd5";


app.get('/peliculaById', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200'); //cambiar del localhost al puerto que me proporciona frontend al lanzar el comando ng serve si son cambios en el local, pero si es en okteto es diferente, tiene que ser el de octeto

    //escojo la pelicula aleatoria
    const filaPelicula = Math.floor(Math.random() * 3);

    //uso el objeto database que lo tengo en otro archivo que me hace la conexion y luego la consulta
    database.query(
        //limit, primer numero es la cantidad de filas que voy a saltar y el segundo la cantidad de filas que voy a seleccionar
        'SELECT * FROM `peliculaIds` limit '+filaPelicula+', 1',
        async function(err: any, results: any, fields: any) {

            const idPelicula = results[0].idPelicula;
            
            
            const response = await fetch( url + idPelicula + apiKey ); //consulta
            const data = await response.json(); //lo guardo en data
            res.send(data);  //envio al frontend

        }
      );
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
