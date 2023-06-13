import { Component } from '@angular/core';
import { BaseDatosPeliculasService } from 'src/app/base-datos-peliculas.service';
//import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent {

  private peliculaUsuario:any;
  private peliculaDelDia: any;

  //hago la conexion con el servicio
  constructor(private baseDatos:BaseDatosPeliculasService) {}

  getBusquedaPeliculaUsuario(busqueda:string):Array<any>{
    this.peliculaUsuario=this.baseDatos.getBusquedaPeliculaUsuario(busqueda)
    return this.peliculaUsuario
  }

  getPeliculaUsuario(){
    return this.baseDatos.getPeliculaUsuario()
  }

  //la pelicula del dia
  getPeliculaDelDia(){
    return this.baseDatos.getPeliculaDelDia()
  }


  coincideGenero(): boolean {
    if (!this.peliculaUsuario || !this.peliculaDelDia) {
      return false;
    }
    return (
      this.peliculaUsuario.Genre === this.peliculaDelDia.Genre
    );
  }

  coincideAnio(): boolean {
    if (!this.peliculaUsuario || !this.peliculaDelDia) {
      return false;
    }
    return (
      this.peliculaUsuario.Year === this.peliculaDelDia.Year
    );
  }

  coincideActores(): boolean {
    if (!this.peliculaUsuario || !this.peliculaDelDia) {
      return false;
    }
    return (
      this.peliculaUsuario.Actors === this.peliculaDelDia.Actors
    );
  }

  coincideDirector(): boolean {
    if (!this.peliculaUsuario || !this.peliculaDelDia) {
      return false;
    }
    return (
      this.peliculaUsuario.Director === this.peliculaDelDia.Director
    );
  }
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
