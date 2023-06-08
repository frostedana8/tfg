import { Component } from '@angular/core';
import { BaseDatosPeliculasService } from 'src/app/base-datos-peliculas.service';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent {

  public pelis:any;

  constructor(private baseDatosPeliculas:BaseDatosPeliculasService){
    this.pelis = this.baseDatosPeliculas.getPelis();
  };

  //Aqui recojo del servivio las peliculas
  getPelis(){
    this.pelis = this.baseDatosPeliculas.getPelis();
  };

}
