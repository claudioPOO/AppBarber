import {Injectable} from '@angular/core';

@Injectable()

export class TurnService{
    public turns:Array<any>=[]
    constructor(){
        if (this.turns.length == 0){
            this.turns = []
        }
        else{
            this.turns = JSON.parse(localStorage.getItem("turns") ?? '[]');
        }
    };

    getTurns(){
        this.turns= JSON.parse(localStorage.getItem("turns") ?? '[]');
        return this.turns;
    }
    addTurno(turn:any){
        
        this.turns= JSON.parse(localStorage.getItem("turns") ?? '[]');        
        this.turns.push(turn)
        localStorage.setItem("turns",JSON.stringify(this.turns));
    }
    getUltimoId(){return this.turns.length}
    deleteTurn(id:number){
        this.turns= JSON.parse(localStorage.getItem("turns") ?? '[]');        
        const indice = this.turns.findIndex(turno => turno.id_turno === id );
        if ( indice >-1 ){
            console.log('indice'+ indice)
            this.turns.splice(indice,1)
        }
        localStorage.setItem("turns",JSON.stringify(this.turns));
    }
    limpiarLocalStorage(){
        localStorage.clear();
    }
}
