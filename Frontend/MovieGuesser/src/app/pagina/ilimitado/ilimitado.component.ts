import { Component } from '@angular/core';
import { BaseDatosPeliculasService } from 'src/app/base-datos-peliculas.service';

@Component({
  selector: 'app-ilimitado',
  templateUrl: './ilimitado.component.html',
  styleUrls: ['./ilimitado.component.css']
})
export class IlimitadoComponent {

  private peliculas :Array<string> = ["tt0111161", "tt0068646","tt0468569", "tt0071562", "tt0050083", "tt0108052", "tt0167260", "tt0110912", "tt0120737", "tt0060196"]
  protected peliculaIlimitado: any
  protected peliculasBuscadas: any
  protected isLoading: boolean = false;
  protected isError: boolean = false;
  protected errorMessage: string = "";
  protected ganaste: boolean = false;
  protected disableTextbox = false;

  constructor(private baseDatos:BaseDatosPeliculasService){
    this.peliculasBuscadas = []
    this.getPeliculaAleatoria()
  };

  //numero aleatoria sobre la array de peliculas
  getPeliculaAleatoria() {
    let pelicula = this.peliculas[Math.floor(Math.random() * this.peliculas.length)]
    this.baseDatos.getPeliculaById(pelicula).then((response) => {
      this.peliculaIlimitado = response
      console.log(response)
      this.disableTextbox = false;
    });
  }

  //buscamos la pelicula que ha introducido el usuario
  buscarPelicula(busqueda: any) {
    this.isError= false;
    this.isLoading = true

    //corregimos los errores
    if (!busqueda.value || busqueda.value.trim() == "") {
      this.isLoading = false;
      this.isError= true;
      this.errorMessage = "* Tienes que introducir una película";
      busqueda.value = "";
      return
    }

    //nos traemos la pelicula del servicio
    this.baseDatos.getBusquedaPeliculaUsuario(busqueda.value).then((response: any) => {

      this.isLoading = false

      if (response.Response == "False") {
        this.errorMessage = " * No existe la pelicula '"+busqueda.value+"' en nuestra base de datos";
        this.isError= true;
      }
      else {
        //agrega response (la respuesta de la película encontrada) a la array de peliculasBuscadas
        this.peliculasBuscadas.push(response)
      }


      busqueda.value = "";

    })
  }


  coincideTitulo(pelicula: any): boolean {

    if (!pelicula || !this.peliculaIlimitado) {
      return false;
    }
    if(pelicula.Title === this.peliculaIlimitado.Title){
      this.disableTextbox = true;
      return true;
    }
    else return false
  }

  coincideGenero(pelicula: any): string {
    if (!pelicula || !this.peliculaIlimitado) {
      return "incorrecto";
    }

    else if (pelicula.Genre === this.peliculaIlimitado.Genre) {
      return "correcto"
    }

    else {
      let peliculaGeneros = pelicula.Genre.split(',');
      let peliculaDiaGeneros = this.peliculaIlimitado.Genre.split(',');
      let encontrado = false;

      for (var i = 0; i < peliculaGeneros.length; i++) {

        for (var j = 0; j < peliculaDiaGeneros.length; j++) {
          if (peliculaDiaGeneros[j].trim().toUpperCase() == peliculaGeneros[i].trim().toUpperCase()) {
            encontrado = true;
          }
        }
      }

      if (encontrado) return "parcial";
      else return "incorrecto";
    }
  }

  coincideAnio(pelicula: any): boolean {
    if (!pelicula || !this.peliculaIlimitado) {
      return false;
    }
    return (
      pelicula.Year === this.peliculaIlimitado.Year
    );
  }

  coincideActores(pelicula: any): string {

    if (!pelicula || !this.peliculaIlimitado) {
      return "incorrecto";
    }

    else if (pelicula.Actors === this.peliculaIlimitado.Actors) {
      return "correcto"
    }

    else {
      let peliculaGeneros = pelicula.Actors.split(',');
      let peliculaDiaGeneros = this.peliculaIlimitado.Actors.split(',');
      let encontrado = false;

      for (var i = 0; i < peliculaGeneros.length; i++) {

        for (var j = 0; j < peliculaDiaGeneros.length; j++) {
          if (peliculaDiaGeneros[j].trim().toUpperCase() == peliculaGeneros[i].trim().toUpperCase()) {
            encontrado = true;
          }
        }
      }

      if (encontrado) return "parcial";
      else return "incorrecto";
    }
  }

  coincideDirector(pelicula: any): boolean {

    return (pelicula && this.peliculaIlimitado && pelicula.Director === this.peliculaIlimitado.Director)

  }



  intentarDeNuevo() {
    this.getPeliculaAleatoria();


    this.isError = false;
    this.isLoading = false;
    this.peliculasBuscadas = [];
  }


  }

