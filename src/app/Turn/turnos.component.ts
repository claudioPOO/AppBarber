import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientService } from '../client/client.service';
import { BarbersService } from '../barbers/barbers.service';
;
import { TurnService } from './turn.service';
import { CalendarioService } from '../service/calendario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'solicitarTurno',
  templateUrl: 'solicitarTurno.html',
  providers: [ClientService, BarbersService, TurnService],
  
})
export class TurnosComponent {
  public schedules: Array<string> = [];
  public client: any;
  public barbers: Array<any> = [];
  public selectedBarber: Boolean = false;
  public barber: any;
  public selectedDay: any = '';
  public selectedSchedule: string = 'none';
  public weekDays: Array<any> = ['Lun', 'Mar', 'Mie', 'Juev', 'Vier', 'Sab'];
  public dayOfTheMonth: any[] = [];
  public currentMonth: any = '';
  public selectDay: number = -1;
  public selectHour: number = -1;
  constructor(
    private clientService: ClientService,
    private barberService: BarbersService,
    private calendarioService: CalendarioService,
    private turnService: TurnService
  ) {
    
  }
  ngOnInit() {
    this.client = this.clientService.getClient(0);
    this.barbers = this.barberService.getBarbers();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth();
    this.dayOfTheMonth = this.calendarioService.getDayOfTheMonth(
      currentYear,
      this.currentMonth
    );
    const turns = this.turnService.getTurns();
 
  }

  showCalendar(id_barber: number) {
    this.selectedBarber = true;
    this.barber = this.barberService.getBarber(id_barber - 1);
  }
  setTurn(dato: any, index: number) {
    if (typeof dato == 'string') {
      this.selectedSchedule = dato;
      this.selectHour = index;
    } else {
      this.selectedDay = dato;
      this.selectDay = index;
      // Logica de los schedules que ya tiene ese barber el dia seleccionado para mostrar los schedules resultantes
      this.seeSchedulesAvailables(this.barber, this.selectedDay);
    }
  }
  confirmTurn() {
    Swal.fire({
      title: 'Turno Confirmado',
      html:
        'barber: ' +
        this.barber.name +
        ' ' +
        this.barber.lastName +
        '<br>' +
        'Dia: ' +
        this.selectedDay +
        '/' +
        (this.currentMonth + 1) +
        '<br>' +
        'Horario: ' +
        this.selectedSchedule,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
    const turn = {
      idTurno:this.turnService.getTurns().length + 1,
      idBarber:this.barber.id,
      idClient:this.client.idClient,
      day:this.selectedDay,
      hour:this.selectedSchedule
    }
    
    this.turnService.addTurno(turn);
    this.selectedBarber = false;
    this.selectedDay = '';
    this.selectDay = -1;
    this.selectHour = -1;
  }
  seeSchedulesAvailables(barber: any, day: number) {
    this.schedules = [
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

    if (this.turnService.getTurns().length > 0) {
      const turns = this.turnService.getTurns();

      turns.forEach((turn) => {
        if (turn.idBarber === barber.id && turn.day === day) {
          const index = this.schedules.indexOf(turn.hour);
          this.schedules.splice(index, 1);
        }
      });
    }
  }
}
