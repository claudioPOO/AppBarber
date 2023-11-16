import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  obtenerDiasDelMes(anio: number, mes: number): any[] {
    const primerDiaDelMes = new Date(anio, mes, 1);
    const ultimoDiaDelMes = new Date(anio, mes + 1, 0);
    const fechaActual = new Date();
    const diasDelMes = [];
    for (let i = primerDiaDelMes.getDate(); i <= ultimoDiaDelMes.getDate(); i++) {
      const fecha = new Date(anio, mes, i);
      if (fecha >= fechaActual && fecha.getDay() !== 0) { // Filtra los domingos y días anteriores a la fecha actual
        diasDelMes.push({
          numero: fecha.getDate(),
          dia_num:fecha.getDay()});
      
          
      }
    }
    return diasDelMes;
  }

  obtenerNombreDia(dia: number): string {
    const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return nombresDias[dia];
  }
}
