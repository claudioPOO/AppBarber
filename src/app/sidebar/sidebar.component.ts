import { Component, NO_ERRORS_SCHEMA  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'sidebar',
    templateUrl:'./sidebar.component.html',
    styleUrls:['./sidebar.css'],
})

export class SidebarComponent{
    public icons:Array<any>;
    constructor(private router: Router){
        const idCliente=1;
        this.icons=[
            {icon:'home',name:'Inicio',link:'/solicitarTurno'},
            {icon:'event_available',name:'Turnos',link:'/verTurnos/'+idCliente},
            {icon:'edit',name:'Datos',link:'/cliente'},
            {icon:'contact_support',name:'Contactanos',link:''},
            {icon:'checklist',name:'Servicios',link:'/servicios'},
        ]
    }
    ngOnInit(){}
}





