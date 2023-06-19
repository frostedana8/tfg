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
const url = "https://www.omdbapi.com/?i=tt";
const apiKey = "&apikey=feec4bd5";
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/peliculaById', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
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
    return console.log(`Express is listening at http://backend:${port}`);
});
/* import express from 'express';
const app = express();

const multer = require('multer');
const upload = multer();

app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(express.static('public'));

const database = require('./database/mysqlconnection');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcrypt');
const saltRounds = 10;

const frontendURL = 'http://localhost:4200'
const port = 3000;

function generaTokenJWT(username) {
  return jwt.sign({ "username": username }, process.env.APP_SECRET, { expiresIn: '3600s' });
}

function autenticarTokenJWT(req: any, res: any, next: any) {

  res.set('Access-Control-Allow-Methods', 'GET,POST');
  res.set('Access-Control-Allow-Origin', frontendURL);

  const authorizationHeader = req.headers['authorization']
  const token = authorizationHeader && authorizationHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.APP_SECRET as string, (err: any, usuario: any) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = usuario

    next()
  });
}


const url:string="https://www.omdbapi.com/?i=tt";
const apiKey:string="&apikey=feec4bd5";

app.get('/', (req, res) => {

    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Origin', frontendURL);

    res.send('Hello World!');
});

app.get('/peliculaById', (req, res) => {

    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Origin', frontendURL);

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

//Método para registrar un usuario y generar su JWT.
app.post('/register', (req, res) => {

  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Origin', frontendURL);

  console.log(req.body);

  const body = JSON.parse(req.body);

  let errors = [];

  if (!body) {
    res.sendStatus(400);

    return
  }

  if (body.email === undefined) {
    errors.push({email: "No has especificado un email"});
  }
  if (body.usuario === undefined) {
    errors.push({usuario: "No has introducido un usuario"});
  }
  if (body.password === undefined) {
    errors.push({password: "No has introducido una contraseña"});
  }
  if (body.password_confirmation === undefined) {
    errors.push({password: "No has introducido la confirmación de la contraseña"});
  }

  if (errors.length) {
    res.json({errors: errors});

    return
  }

  const email_regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const email = body.email;
  const usuario = body.usuario;
  const password = body.password;
  const password_confirmation = body.password_confirmation;

  if (!email_regex.test(email)) {
    errors.push({email: "El email no es un email válido"});
  }

  if (email == "") {
    errors.push({email: "No has especificado un email"});
  }
  if (usuario == "") {
    errors.push({usuario: "No has introducido un usuario"});
  }
  if (password == "") {
    errors.push({password: "No has introducido una contraseña"});
  }
  if (password_confirmation == "") {
    errors.push({password: "No has introducido la confirmación de la contraseña"});
  }
  if (password && password_confirmation && password != password_confirmation) {
    errors.push({password: "La confirmación de la contraseña no es correcta"});
  }

  if (!errors.length) {

    database.query(
      //limit, primer numero es la cantidad de filas que voy a saltar y el segundo la cantidad de filas que voy a seleccionar
      'SELECT * FROM `usuarios` where `email` = "'+email+'" or `usuario` = "'+usuario+'"',
      function(err: any, results: any, fields: any) {

          if (results.length && !err) {
            errors.push({usuario: "El usuario ya existe, por favor escoja otro"});

            res.json({errors: errors});

            return
          }
          else if (err) {
            errors.push({usuario: "Error inesperado: " + err});

            res.json({errors: errors});

            return
          }
          else {
            
            bcrypt.hash(password, saltRounds, function(err, hash) {
              // Store hash in your password DB.
              database.query(
                'INSERT INTO `usuarios` (usuario, email, password) values("'+usuario+'","'+email+'","'+hash+'")',
                function(err: any, results: any, fields: any) {
                  if (!err) {
                    const token = generaTokenJWT(email)

                    res.json(token);

                    return
                  }
                  else {
                    errors.push({usuario: "Ha ocurrido un error al registrar el usuario: " + err});

                    res.json({errors: errors});
                    
                    return
                  }
                }
              )
            });
          }

      }
    );
  }
  else {
    res.json({errors: errors});
  }

  
})

//Método para iniciar sesión con un usuario y generar su JWT.
app.post('/login', (req, res) => {

  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Origin', frontendURL);

  const body = JSON.parse(JSON.stringify(req.body));

  const email = body.email;
  const password = body.password;

  let errors = [];

  if (!email || email == "") {
    errors.push({email: "No has especificado un email"});
  }
  if (!password || password == "") {
    errors.push({password: "No has introducido una contraseña"});
  }

  if (!errors.length) {

    database.query(
      //limit, primer numero es la cantidad de filas que voy a saltar y el segundo la cantidad de filas que voy a seleccionar
      'SELECT * FROM `usuarios` where `email` = "'+email +'"',
      function(err: any, results: any, fields: any) {

          if (!results.length) {
            errors.push({usuario: "El usuario no existe"});

            res.json({errors: errors});
          }
          else {

            bcrypt.compare(password, results[0].password, function(err, result) {
              // result == true
          
              if (!result) {
                errors.push({password: "Contraseña incorrecta"});
          
                res.json({errors: errors});
              }
              else {
                const token = generaTokenJWT(email)

                res.json(token);
              }
            });
          }
      }
    );
  }
  else {
    res.json({errors: errors});
  }
  
});

//Método para insertar un intento de usuario para la clasificación.
app.post('/intento', autenticarTokenJWT, (req: any, res) => {

  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Origin', frontendURL);

  const body = JSON.parse(JSON.stringify(req.body));

  let errors = [];

  const puntos = body.puntos;
  const user = req.user;

  if (!puntos) {
    errors.push({puntos: "Hay que especificar los puntos"});
  }

  if (errors.length) {
    res.json({errors: errors});
    return
  }
  else {

    database.query(
      'SELECT id,usuario FROM usuarios where email="'+ user.username +'"',
      function(err: any, results: any, fields: any) {
        if (err) {
          errors.push({usuario: "Ha ocurrido un error inseperado: " + err});

          res.json(errors);
          return
        }
        else if (!results.length) {
          errors.push({usuario: "No se ha encontrado el usuario " + user.username});

          res.json({errors: errors});
          return
        }
        else {
          const userId = results[0].id;
          const userName = results[0].usuario;

          database.query(
            'INSERT into intentos(usuario, nombre, puntos) values("'+userId+'", "'+userName+'" ,'+puntos+')',
            function(err: any, results: any, fields: any) {
              if (err) {
                errors.push({puntos: "Ha ocurrido un error inesperado: " + err});
                res.json({errors: errors});

                return
              }
              else {
                res.send({message: "Ok"});

                return
              }
            }
          );

        }
      }
    )
    
  }

});

app.get('/intentos', autenticarTokenJWT, (req, res) => {

  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Origin', frontendURL);

  database.query(
    'SELECT * FROM intentos ORDER BY puntos desc,hora desc',
    function(err: any, results: any, fields: any) {
      if (err) {
        res.send({error: "Ha ocurrido un error: " + err});
        return
      }
      else {
        res.json(results);
        return
      }
    }
  );

});

//Método para destruir la sesión (Realmente el backend no tiene que hacer nada, el frontend se encarga de quitar el JWT)
app.post('/logout', autenticarTokenJWT, (req, res) => {

  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Origin', frontendURL);

  res.send("User logged out");

});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
}); */
//# sourceMappingURL=app.js.map