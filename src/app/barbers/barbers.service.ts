import {Injectable} from "@angular/core"


@Injectable()

export class BarbersService{
    public barbers:Array<any>;
    
  
    constructor(){
        this.barbers = [
            {id:1,name:"Jose",lastname:"Hernandez",phone:"2644806954",img:"https://img.freepik.com/foto-gratis/peluquero-adulto-que-corta-cabello-clientes-barberia_23-2148181970.jpg?w=360&t=st=1697170079~exp=1697170679~hmac=1aa21ba2199b0cb23edde1e8e1d98a12f06813191bda1cdf1f7d2f6ab079c61f"},
            {id:2,name:"Ramon",lastname:"Perez",phone:"2644586954",img:"https://img.freepik.com/foto-gratis/hombre-cortandose-pelo-salon-tiro-medio_23-2149141740.jpg?size=626&ext=jpg&ga=GA1.1.1594445387.1691361828&semt=sph"},
            {id:3,name:"Hernan",lastname:"Diaz",phone:"2644302954",img:"https://img.freepik.com/foto-gratis/hipster-tatuado-antigua-usanza-camisa-blanca-tirantes-sostiene-tijeras-aislado-fondo-textura-oscura_613910-6387.jpg?size=626&ext=jpg&ga=GA1.1.1594445387.1691361828&semt=sph"},
        ]
    }
    getBarbers(){
	    return this.barbers;
    }
    getBarber(id:number){
        return this.barbers[id];
    }
	
}
