import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosPeliculasService {

  private url:string="http://www.omdbapi.com/?i=tt3896198&apikey=feec4bd5";
  //ejemplo completo "https://api.themoviedb.org/3/movie/550?api_key=ca2b543af7547a28bb9fa0241afb21f1"
  //private url:string="https://api.themoviedb.org/3/movie/550?api_key=ca2b543af7547a28bb9fa0241afb21f1";
  //private apiKey="ca2b543af7547a28bb9fa0241afb21f1";
  private pelis:any;

  constructor(private http:HttpClient) {
    this.http.get(this.url).subscribe( (respuesta:any)=>{
      this.pelis=respuesta;
      console.log(this.pelis);
    })
  }

  getPelis(){return this.pelis};
}
