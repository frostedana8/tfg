import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosPeliculasService {
 //http://www.omdbapi.com/?i=tt3896198&apikey=feec4bd5
  private url:string="https://www.omdbapi.com";
  private apiKey:string="&apikey=feec4bd5";


  //la busqueda de la url para la pelicula de hoy, lo tengo que coger del backend
  private url2:string="http://backend:3000/peliculaById"; //cambiar este por el backend del octeto?

  //la pelicula del dia
  private peliculaDelDia: any;
  private peliculaUsuario: any;

  constructor(private http:HttpClient) {  }

  //esta me devuelve el objeto en si, se usa la misma en el diario y en el ilimitado
  getPeliculaAleatoria(){

    return this.http.get(this.url2).toPromise();

  }

  //esta es una funcion que tiene como parametro el valor/titulo introducido por el usuario
  //es un get que retorna los datos de la pelicula introducido por el usuario
  getBusquedaPeliculaUsuario(busqueda:string) {

    return this.http.get(this.url+"/?t="+ busqueda +this.apiKey).toPromise();

  }


  //si quiero enviar los datos al hijo tengo que hacer un get
  getPeliculaUsuario(){return this.peliculaUsuario}


}
