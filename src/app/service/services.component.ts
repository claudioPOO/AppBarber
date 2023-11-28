import {Component} from "@angular/core";
import { ServicesService } from "./servicios.service";
@Component({
    selector:"services",
    templateUrl: "services.component.html",    
    providers:[ServicesService],
})

export class ServicesComponent{
    public services:Array<any>=[];
    public icons:Array<any>=[];
    constructor(
        private service:ServicesService,
    ){
       
    }
    ngOnInit(){ 
        this.services=this.service.getCollection();
    }
}   