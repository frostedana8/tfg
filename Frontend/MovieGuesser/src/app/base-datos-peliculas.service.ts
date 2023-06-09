import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosPeliculasService {

  //private url:string="http://www.omdbapi.com/?i=tt3896198&apikey=feec4bd5";

  //http://www.omdbapi.com/?i=tt0332452&apikey=feec4bd5  tt0332452
  private url:string="http://www.omdbapi.com";
  private apiKey:string="&apikey=feec4bd5";
  private pelis:any;

  constructor(private http:HttpClient) {

  }

/*   getBusqueda(busqueda:string):Array<any>{
    this.http.get(this.url+"/?=tt"+busqueda+this.apiKey).subscribe( (data:any)=>{
      this.pelis=data.list;
      console.log(this.pelis);
    })
    return this.pelis
  } */


  //getPelis(){return this.pelis};
}
