import { Component } from '@angular/core';
import { ClientService } from './client.service';

@Component({
  selector: 'cliente',
  templateUrl: './client.component.html',
  providers: [ClientService],
})
export class ClientComponent {
  public listClients: Array<any>;
  constructor(private clientService: ClientService) {
    this.listClients = [];
  }
  ngOnInit() {
    this.listClients = this.clientService.getClients();
  }
}
