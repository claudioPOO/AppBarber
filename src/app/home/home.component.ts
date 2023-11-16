import { Component } from '@angular/core';
import { ServicesService } from '../service/servicios.service';

@Component({
  selector: '',
  templateUrl: './home.html',
  providers:[ServicesService],
})
export class HomeComponent {
  title = 'Con estilo Pelu';
 
  public services: Array<any>;

  constructor(
    private servicesService: ServicesService,
  ){
    this.services=[];
  }
  ngOnInit(){
    this.services=this.servicesService.getCollection();
  }
}
