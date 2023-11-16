import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { BarbersService } from '../barbers/barbers.service';
import { TurnoService } from './turno.service';

@Component({
  selector: 'verTurnos',
  templateUrl: './verTurnos.html',
  providers: [BarbersService, TurnoService],
})
export class VerTurnosComponent {
  public clienteId: number = 0;
  public turnos: Array<any> = [];
  public barberos: Array<any> = [];
  public turnosCliente: Array<any> = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private barberService: BarbersService,
    private turnoService: TurnoService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clienteId = parseInt(params['idcliente']); // Obtiene el valor del parametro id cliente
    });
    this.mostrar();
  }
  mostrar() {
    (this.barberos = this.barberService.getBarbers()),
      (this.turnos = this.turnoService.getTurnos());
    console.log(this.turnos);
    console.log(this.clienteId);

    this.turnos.forEach((turno) => {
      if (turno.id_cliente == this.clienteId) {
        this.barberos.forEach((barbero) => {
          if (turno.id_barbero === barbero.id) {
            const nuevoTurno = {
              id_turno: turno.id_turno,
              nombre_barbero: barbero.nombre + ' ' + barbero.apellido,
              hora: turno.hora,
              dia: turno.dia,
            };
            this.turnosCliente.push(nuevoTurno);
          }
        });
      }
    });
  }
  cancelarTurno(id: number) {
    this.turnoService.deleteTurno(id);
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
