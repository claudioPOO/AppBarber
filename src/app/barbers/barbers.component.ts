import { Component } from '@angular/core';
import { BarbersService } from './barbers.service';

@Component({
  selector: 'barbero', //Etiqueta donde se carga el componente
  templateUrl: './barbers.component.html', //Template URL carga la plantilla html .. Template se trabaja en el mismo .ts
  providers: [BarbersService],
})
export class BarberComponent {
  public list_barbers: Array<any>;
  constructor(private barbersService: BarbersService) {
    this.list_barbers = [];
  }
  ngOnInit() {
    this.list_barbers = this.barbersService.getBarbers();
  }
  addBarbero() {}
  deleteBarbero() {}
  
}
