import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseDatosPeliculasService } from 'src/app/base-datos-peliculas.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  //el registro con el backend de node.js
  protected isError: boolean = false;
  protected errors: any;
  protected usuario: string;
  protected email: string;
  protected password: string;
  protected password_confirmation: string;

  constructor(private baseDatos:BaseDatosPeliculasService) {
    this.usuario = "";
    this.email = "";
    this.password = "";
    this.password_confirmation = "";
  }

  public registerUser() {

    this.isError = false;

    this.baseDatos.registerUser(this.usuario, this.email, this.password, this.password_confirmation)
      .then((response: any) => {

      console.log(response);

      if (response.errors) {
        this.isError = true;
        this.errors = response.errors;
      }
      else {
        document.cookie = `token=${response}`;
      }

    });

  }
}
