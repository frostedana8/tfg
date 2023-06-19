import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

class UserData{
  public usuario: string = "";
  public email: string = "";
  public password: string = "";
  public password_confirmation: string = "";
}

@Injectable({
  providedIn: 'root'
})
export class BaseDatosPeliculasService {

  private url:string="https://www.omdbapi.com";                                               //http://www.omdbapi.com/?i=tt3896198&apikey=feec4bd5
  private apiKey:string="&apikey=feec4bd5";
  //private url2:string="http://localhost:3000/peliculaById";                                   //la busqueda de la url para la pelicula de hoy, lo tengo que coger del backend
  private backendUrl: string = "http://localhost:3000";                                       //comentar  ya no me sirve sin el registro


  //la busqueda de la url para la pelicula de hoy, lo tengo que coger del backend
  private url2:string="/peliculaById"; //cambiar este por el backend del octeto?

  //la pelicula del dia
  private peliculaDelDia: any;
  private peliculaUsuario: any;

  constructor(private http:HttpClient) {
    this.http.get(this.url2).subscribe( (respuesta:any)=> {
      this.peliculaDelDia=respuesta
      //console.log(this.peliculaDelDia)
    })
  }

  getPeliculaDelDia(){
    return this.peliculaDelDia
  }

//esta es una funcion que tiene como parametro el valor/titulo introducido por el usuario//es un get que retorna los datos de la pelicula introducido por el usuario
  getBusquedaPeliculaUsuario(busqueda:string) {
    return this.http.get(this.url+"/?t="+ busqueda +this.apiKey).toPromise();
  }


//si quiero enviar los datos al hijo tengo que hacer un get
  getPeliculaUsuario(){return this.peliculaUsuario}

//componente ilimitado//hace la busqueda por id, se lo trae desde el comp. ilimitado
  getPeliculaById( idPelicula:string) {

    return this.http.get(this.url+"/?i="+ idPelicula +this.apiKey).toPromise();
  }

  registerUser(usuario: string, email: string, password: string, password_confirmation: string) {

    let userData = new UserData();
    userData.usuario = usuario;
    userData.email = email;
    userData.password = password;
    userData.password_confirmation = password_confirmation;

    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(this.backendUrl + "/register", {"usuario": usuario, "email": email, "password": password, "password_confirmation": password_confirmation}, options).toPromise();
  }



}
