import { Component } from '@angular/core';
import { BaseDatosPeliculasService } from 'src/app/base-datos-peliculas.service';

@Component({
  selector: 'app-ilimitado',
  templateUrl: './ilimitado.component.html',
  styleUrls: ['./ilimitado.component.css']
})
export class IlimitadoComponent {


  protected peliculaIlimitado: any
  protected peliculasBuscadas: any
  protected isLoading: boolean = false;
  protected isError: boolean = false;
  protected errorMessage: string = "";

  constructor(private baseDatos:BaseDatosPeliculasService){
    this.peliculasBuscadas = []
    this.getPeliculaAleatoria()
  };

  getPeliculaAleatoria(){

    this.baseDatos.getPeliculaAleatoria().then((response) => {
      this.peliculaIlimitado = response;
      console.log(response)
    })

  }

  //este método es equivalente a getBusquedaPeliculaUsuario del diario
  buscarPelicula(busqueda: any) {
    this.isError= false;
    this.isLoading = true

    if (!busqueda.value || busqueda.value.trim() == "") {
      this.isLoading = false;
      this.isError= true;
      this.errorMessage = "Tienes que introducir una película";
      busqueda.value = "";
      return
    }

    this.baseDatos.getBusquedaPeliculaUsuario(busqueda.value).then((response: any) => {

      this.isLoading = false

      if (response.Response == "False") {
        this.errorMessage = "No existe la pelicula '"+busqueda.value+"' en nuestra base de datos";
        this.isError= true;
      }
      else {
        this.peliculasBuscadas.push(response)
      }

      busqueda.value = "";

    })
  }
  coincideTitulo(pelicula: any): boolean {

    if (!pelicula || !this.peliculaIlimitado) {
      return false;
    }
    return (
      pelicula.Title === this.peliculaIlimitado.Title
    );
  }

  coincideGenero(pelicula: any): boolean {
    if (!pelicula || !this.peliculaIlimitado) {
      return false;
    }
    return (
      pelicula.Genre === this.peliculaIlimitado.Genre
    );
  }

  coincideAnio(pelicula: any): boolean {
    if (!pelicula || !this.peliculaIlimitado) {
      return false;
    }
    return (
      pelicula.Year === this.peliculaIlimitado.Year
    );
  }

  coincideActores(pelicula: any): boolean {
    if (!pelicula || !this.peliculaIlimitado) {
      return false;
    }
    return (
      pelicula.Actors === this.peliculaIlimitado.Actors
    );
  }

  coincideDirector(pelicula: any): boolean {

    return (pelicula && this.peliculaIlimitado && pelicula.Director === this.peliculaIlimitado.Director)

  }

  intentarDeNuevo() {
    this.getPeliculaAleatoria();

    this.isError = true;
    this.errorMessage = "Vaya la pelicula era tal";
    this.isLoading = false;
    this.peliculasBuscadas = [];
  }


  }

