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
  private peli:any;


  //solo para las pruebas
  private pruebaPeli:string="http://www.omdbapi.com/?i=tt0332452&apikey=feec4bd5"
  private pruebaResultadoPeli:any;


  private urlUsuario:string=""

  constructor(private http:HttpClient) {


    //solo para las pruebas
    this.http.get(this.pruebaPeli).subscribe( (respuesta:any)=> {
      this.pruebaResultadoPeli = respuesta

    })
  }


  BuscarPeliculaPorNombre(tituloPeli:string) {
    this.http.get(this.url)
  }

  getPelis(){
    console.log(this.pruebaResultadoPeli)
    return this.pruebaResultadoPeli}

  //esta es la final/la buena
/*   getNumeroPeli(numero:string):Array<any>{
    this.http.get(this.url+"/?=tt"+numero+this.apiKey).subscribe( (data:any)=>{
      this.peli=data;
      console.log(this.peli);
    })
    return this.peli
  }; */






  //getPelis(){return this.pelis};
}
