import {Injectable} from '@angular/core';
import { Turno } from './turnos';

@Injectable()

export class TurnoService{
    public turnos:Array<Turno>=[]
    constructor(){
        if (this.turnos.length == 0){
            this.turnos = []
        }
        else{
            this.turnos = JSON.parse(localStorage.getItem("turnos") ?? '[]');
        }
    };

    getTurnos(){
        this.turnos= JSON.parse(localStorage.getItem("turnos") ?? '[]');
        return this.turnos;
    }
    addTurno(turno:Turno){
        this.turnos= JSON.parse(localStorage.getItem("turnos") ?? '[]');        
        this.turnos.push(turno)
        localStorage.setItem("turnos",JSON.stringify(this.turnos));
    }
    getUltimoId(){return this.turnos.length}
    deleteTurno(id:number){
        this.turnos= JSON.parse(localStorage.getItem("turnos") ?? '[]');        
        const indice = this.turnos.findIndex(turno => turno.id_turno === id );
        if ( indice >-1 ){
            console.log('indice'+ indice)
            this.turnos.splice(indice,1)
        }
        localStorage.setItem("turnos",JSON.stringify(this.turnos));
    }
    limpiarLocalStorage(){
        localStorage.clear();
    }
}
