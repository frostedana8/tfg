import { Component } from '@angular/core';
import { BaseDatosPeliculasService } from 'src/app/base-datos-peliculas.service';
//import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent {

  protected peliculaUsuario:any;
  protected peliculaDelDia: any;
  protected isLoading: boolean = false;
  protected isError: boolean = false;
  protected errorMessage: string = "";



  //hago la conexion con el servicio
  constructor(private baseDatos:BaseDatosPeliculasService) {
    this.peliculaUsuario = []
    this.getPeliculaAleatoria()
  }

  //este método es equivalente a buscarPelicula del ilimitado
  getBusquedaPeliculaUsuario(busqueda:any) {
    this.isError= false;
    this.isLoading = true;

    //corregir el error, si no hay nada o esta vacío el input
    if (!busqueda.value || busqueda.value.trim() == "") {
      this.isLoading = false;
      this.isError= true;
      this.errorMessage = "Tienes que introducir una película";
      busqueda.value = "";
      return
    }

    this.baseDatos.getBusquedaPeliculaUsuario(busqueda.value).then((response: any) => {
      this.isLoading = false

      //corregir el error, si la pelicula no existe en la base de datos, por motivos de traduccion de peliculas, en inglés
      if (response.Response == "False") {
        this.errorMessage = "No existe la pelicula '"+busqueda.value+"' en nuestra base de datos";
        this.isError= true;
      }
      else {
        this.peliculaUsuario.push(response)
      }


      busqueda.value = "";
    });
  }

  //la pelicula del dia
  getPeliculaAleatoria(){
    this.baseDatos.getPeliculaAleatoria().then((response) => {
      this.peliculaDelDia = response
    })
  }

  coincideTitulo(pelicula: any): boolean {
    if (!pelicula || !this.peliculaDelDia) {
      return false;
    }
    return (
      pelicula.Title === this.peliculaDelDia.Title
    );
  }

  coincideGenero(pelicula: any): boolean {
    if (!pelicula || !this.peliculaDelDia) {
      return false;
    }
    return (
      pelicula.Genre === this.peliculaDelDia.Genre
    );
  }

  coincideAnio(pelicula: any): boolean {
    if (!pelicula || !this.peliculaDelDia) {
      return false;
    }
    return (
      pelicula.Year === this.peliculaDelDia.Year
    );
  }

  coincideActores(pelicula: any): boolean {
    if (!pelicula || !this.peliculaDelDia) {
      return false;
    }
    return (
      pelicula.Actors === this.peliculaDelDia.Actors
    );
  }

  coincideDirector(pelicula: any): boolean {

    return (pelicula && this.peliculaDelDia && pelicula.Director === this.peliculaDelDia.Director)

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
