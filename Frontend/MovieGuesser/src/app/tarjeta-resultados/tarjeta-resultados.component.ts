import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-resultados',
  templateUrl: './tarjeta-resultados.component.html',
  styleUrls: ['./tarjeta-resultados.component.css']
})
export class TarjetaResultadosComponent {

//Con esto, el padre componente diario me pasa los datos
@Input() tarjeta: any;


}
