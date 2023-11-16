import {Injectable} from '@angular/core';


@Injectable()
export class ClientService{
    public clients:Array<any>;
    
    constructor(){
        this.clients = [
            {idClient:1,name:'Esteban',lastName:'Rodriguez',phone:'2644735135',email:'rodriguez@gmail.com'},
            {idClient:2,name:'Sebastian',lastName:'Huerta',phone:'2644715495',email:'huerta@gmail.com'},
        ]
    }
    getClients(){
	    return this.clients;
    }
    getClient(id:number){ //el parametro id hace referencia a la posicion donde esta el cliente
        return this.clients[id];
    }
	
}