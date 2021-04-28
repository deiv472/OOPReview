//class
import {Mobile} from "./mobile";

export class MobileLibrary{

    private name : string;
    private location : string;
    private mobiles :Mobile[];
    private totalPrice : number;

    constructor(name:string, location:string, mobiles:Mobile[]){

        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }

    //metodos getters y setters

    public getName():string{
        return this.name;
    }

    public getLocation():string{
        return this.location;
    }

    public getMobiles():Mobile[]{
        return this.mobiles;
    }

    public getTotalPrice():number{
        return this.totalPrice;
    }

    /********************************** */

    public setName(name:string):void{
        this.name = name;
    }

    public setLocation(location:string):void{
        this.location = location;
    }

    public setMobiles(mobiles:Mobile[]):void{
        this.mobiles = mobiles;
    }

    /********************************************* */
    //Metodos

    public totalPriceCalculation():number{

        let totalPrice:number = 0;//creo la variable donde guardo el resultado, inicializado a 0

        for (let i = 0; i < this.mobiles.length; i++){//recorro el array de tipo Mobile desde la posicion 0 a la ultima

            totalPrice += this.mobiles[i].getPrice()//en la variable creada al principio recojo el resultado de 
        }//sumar, dentro de getPrice, todos los elemntos "price"
        return totalPrice;//retorno la variabel con su nuevo valor.

    }





}