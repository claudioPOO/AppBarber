import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientService } from '../client/client.service';
import { BarbersService } from '../barbers/barbers.service';
import { Turno } from './turnos';
import { TurnoService } from './turno.service';
import { CalendarioService } from '../service/calendario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'solicitarTurno',
  templateUrl: 'solicitarTurno.html',
  providers: [ClientService, BarbersService, TurnoService],
  styleUrls: ['./turnos.css'],
})
export class TurnosComponent {
  public horarios: Array<string> = [];
  public cliente: any;
  public barberos: Array<any> = [];
  public barbero_seleccionado: Boolean = false;
  public barbero: any;
  public dia_seleccionado: any = '';
  public horario_seleccionado: string = 'none';
  public dias_semana: Array<any> = ['Lun', 'Mar', 'Mie', 'Juev', 'Vier', 'Sab'];
  public diasDelMes: any[] = [];
  public mesActual: any = '';
  public marcarDia: number = -1;
  public marcarHora: number = -1;
  constructor(
    private clientService: ClientService,
    private barberService: BarbersService,
    private calendarioService: CalendarioService,
    private turnoService: TurnoService
  ) {
    
  }
  ngOnInit() {
    this.cliente = this.clientService.getClient(0);
    this.barberos = this.barberService.getBarbers();
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    this.mesActual = fechaActual.getMonth();
    this.diasDelMes = this.calendarioService.obtenerDiasDelMes(
      anioActual,
      this.mesActual
    );
    const turnos = this.turnoService.getTurnos();
    console.log(turnos);
  }

  verCalendario(id_barbero: number) {
    this.barbero_seleccionado = true;
    this.barbero = this.barberService.getBarber(id_barbero - 1);
  }
  realizarTurno(dato: any, i: number) {
    if (typeof dato == 'string') {
      this.horario_seleccionado = dato;
      this.marcarHora = i;
    } else {
      this.dia_seleccionado = dato;
      this.marcarDia = i;
      // Logica de los horarios que ya tiene ese barbero el dia seleccionado para mostrar los horarios resultantes
      this.verHorariosDisponibles(this.barbero, this.dia_seleccionado);
    }
  }
  confirmarTurno() {
    Swal.fire({
      title: 'Turno Confirmado',
      html:
        'Barbero: ' +
        this.barbero.nombre +
        ' ' +
        this.barbero.apellido +
        '<br>' +
        'Dia: ' +
        this.dia_seleccionado +
        '/' +
        (this.mesActual + 1) +
        '<br>' +
        'Horario: ' +
        this.horario_seleccionado,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
    const turno = new Turno(
      this.turnoService.getTurnos().length + 1,
      this.barbero.id,
      this.cliente.id_cliente,
      this.dia_seleccionado,
      this.horario_seleccionado
    );
    this.turnoService.addTurno(turno);
    this.barbero_seleccionado = false;
    this.dia_seleccionado = '';
    this.marcarDia = -1;
    this.marcarHora = -1;
  }
  verHorariosDisponibles(barbero: any, dia: number) {
    this.horarios = [
      '9:00hs',
      '9:30hs',
      '10:00hs',
      '10:30hs',
      '11:00hs',
      '11:30hs',
      '12:00hs',
      '12:30hs',
      '17:00hs',
      '17:30hs',
      '18:00hs',
      '18:30hs',
      '19:00hs',
      '19:30hs',
      '20:00hs',
    ];

    if (this.turnoService.getTurnos().length > 0) {
      const turnos = this.turnoService.getTurnos();

      turnos.forEach((turno) => {
        if (turno.id_barbero === barbero.id && turno.dia === dia) {
          const indice = this.horarios.indexOf(turno.hora);
          this.horarios.splice(indice, 1);
        }
      });
    }
  }
}
