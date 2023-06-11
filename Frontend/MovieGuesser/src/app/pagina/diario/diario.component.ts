import { Component } from '@angular/core';
import { BaseDatosPeliculasService } from 'src/app/base-datos-peliculas.service';
//import { FormsModule } from '@angular/forms';

interface Pelicula {
  titulo: string;
  anio: string;
  genero: string;
  director: string;
  actores: string;
}

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent {
  tituloIntroducido: string;
  adivinado: boolean = false;
  coincideAnio: boolean;
  coincideGenero: boolean;
  coincideDirector: boolean;
  coincideActores: boolean;
  pelicula: Pelicula = {
    titulo: 'Titanic',
    anio: 'Año',
    genero: 'Genero',
    director: 'Director',
    actores: 'Actores'
  };

  constructor() {
    this.tituloIntroducido = '';
    this.coincideAnio = false;
    this.coincideGenero = false;
    this.coincideDirector = false;
    this.coincideActores = false;

  }
  verificarTitulo() {
    if (this.tituloIntroducido === this.pelicula.titulo) {
      this.adivinado = true;
    } else {
      this.coincideAnio = this.tituloIntroducido === this.pelicula.anio;
      this.coincideGenero = this.tituloIntroducido === this.pelicula.genero;
      this.coincideDirector = this.tituloIntroducido === this.pelicula.director;
      this.coincideActores = this.tituloIntroducido === this.pelicula.actores;
    }
  }
  //pelis:any[];

  //PRACTICAR creo un objeto pelicula con estos campos para practicar
/*   peliculas = [
    { titulo: 'Titanic', año: 1997, genero: 'Drama/Romance', director: 'James Cameron', actores: 'Leonardo DiCaprio, Kate Winslet' },
    { titulo: 'El Padrino', año: 1972, genero: 'Crimen/Drama', director: 'Francis Ford Coppola', actores: 'Marlon Brando, Al Pacino' },
    { titulo: 'Pulp Fiction', año: 1994, genero: 'Crimen/Drama', director: 'Quentin Tarantino', actores: 'John Travolta, Uma Thurman' },
  ]; */

  //constructor(private baseDatosPeliculas:BaseDatosPeliculasService){
    //this.pelis = this.baseDatosPeliculas.getPelis();
  //};

  //Aqui recojo del servicio las peliculas
  //getPelis(){
    //console.log(this.baseDatosPeliculas.getPelis())
    // this.baseDatosPeliculas.getPelis();
  //};


}
  //PRACTICAR

/*   const campoAnio = document.getElementById('campoAnio');
  const campoGenero = document.getElementById('campoGenero');
  const campoDirector = document.getElementById('campoDirector');
  const campoActores = document.getElementById('campoActores');

  const inputTituloIntroducido = document.getElementById('inputTituloIntroducido');
  const botonEnviar = document.getElementById('botonEnviar');
  if (botonEnviar) {
    botonEnviar.addEventListener('click', compararPelicula);
  }
function compararPelicula() {

  const randomPelicula = getRandomPelicula();


  const inputTituloIntroducido = document.getElementById('inputTituloIntroducido') as HTMLInputElement | null;
    if (inputTituloIntroducido) {
      const valorIntroducido = inputTituloIntroducido.value.trim().toLowerCase();

      if (valorIntroducido === randomPelicula.titulo.toLowerCase()) {
        coloresPelicula(randomPelicula, true); // Mostrar verde
      } else {
        coloresPelicula(randomPelicula, false); // Mostrar  rojo
      }

    } else {

    }
}

// Función para obtener una película al azar de la lista
function getRandomPelicula() {
  const randomIndex = Math.floor(Math.random() * peliculas.length);
  return peliculas[randomIndex];
}

// Función para mostrar los detalles de la película en la tabla
function coloresPelicula(peliculas, esCorrecto) {
  campoAnio.textContent = movie.año;
  campoGenero.textContent = movie.genero;
  campoDirector.textContent = movie.director;
  campoActores.textContent = movie.actores;

  // Aplicar estilo a los campos según si la adivinanza es correcta o no
  if (esCorrecto) {
    campoAnio.className = 'green';
    campoGenero.className = 'green';
    campoDirector.className = 'green';
    campoActores.className = 'green';
  } else {
    campoAnio.className = 'red';
    campoGenero.className = 'red';
    campoDirector.className = 'red';
    campoActores.className = 'red';
  }
} */
