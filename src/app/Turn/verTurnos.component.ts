import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { BarbersService } from '../barbers/barbers.service';
import { TurnService } from './turn.service';

@Component({
  selector: 'verTurnos',
  templateUrl: './verTurnos.html',
  providers: [BarbersService, TurnService],
})
export class VerTurnosComponent {
  public clienteId: number = 0;
  public turns: Array<any> = [];
  public barbers: Array<any> = [];
  public turnsClient: Array<any> = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private barberService: BarbersService,
    private turnService: TurnService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clienteId = parseInt(params['idcliente']); // Obtiene el valor del parametro id cliente
    });
    this.Show();
  }
  Show() {
    this.barbers = this.barberService.getBarbers()
    this.turns = this.turnService.getTurns()
    console.log(this.turns)
    this.turns.forEach((turn) => {
      if (turn.idClient == this.clienteId) {
        this.barbers.forEach((barber) => {
          if (turn.idBarber === barber.id) {
            const newTurn = {
              idTurn: turn.idTurn,
              nameBarber: barber.name + ' ' + barber.lastName,
              hour: turn.hour,
              day: turn.day,
            };
            this.turnsClient.push(newTurn);
          }
        });
      }
    });
  }
  cancelTurn(id: number) {
    this.turnService.deleteTurn(id);
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
