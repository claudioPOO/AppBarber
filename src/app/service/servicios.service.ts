import {Injectable} from "@angular/core"

@Injectable()

export class ServicesService{
    public collection=[
        {name:"Corte",price:1500},
        {name:"Barba",price:700},
        {name:"Nutricion",price:3500},
        {name:"Alisado",price:600},
        {name:"Color",price:8000}
    ];     
    
    getCollection(){
	    return this.collection;
    }
	
}


