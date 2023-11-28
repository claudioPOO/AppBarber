import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  getDayOfTheMonth(year: number, month: number): any[] {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const currentDate = new Date();
    const weekDays = [];
    for (let index = firstDay.getDate(); index <= lastDay.getDate(); index++) {
      const date = new Date(year, month, index);
      if (date >= currentDate && date.getDay() !== 0) { // Filtra los domingos y días anteriores a la fecha actual
        weekDays.push({
          num: date.getDate(),
          numDay:date.getDay()});
      
          
      }
    }
    return weekDays;
  }

  getNameDay(day: number): string {
    const nameDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return nameDays[day];
  }
}
