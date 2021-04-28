
//CLASS
export class Mobile {

    private name:string;
    private model:number;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

//CONSTRUCTOR
    constructor(name:string, model:number, trademark:string, sdSize:number, color:string,
         is5G:boolean, cameraNumber:number, price:number){

           this.name=name;
           this.model=model;
           this.trademark=trademark;
           this.sdSize=sdSize;
           this.color=color;
           this.is5G=is5G;
           this.cameraNumber=cameraNumber;
           this.price=price; 
    }

    //METODOS

    //getters

    public getName():string{
        return this.name;
    }
    
    public getModel():number{
        return this.model;
    }

    public getTrademark():string{
        return this.trademark;
    }

    public getSdSize():number{
        return this.sdSize;
    }

    public getColor():string{
        return this.color;
    }

    public getIs5G():boolean{
        return this.is5G;
    }

    public getCameraNumber():number{
        return this.cameraNumber;
    }

    public getPrice():number{
        return this.price;
    }

    //setters

    public setName(name:string):void{
        this.name = name;
    }

    public setModel(model:number):void{
        this.model = model;
    }

    public setTradeMark(trademark:string):void{
        this.trademark = trademark;
    }

    public setSdSize(sdSize:number):void{
        this.sdSize = sdSize;
    }

    public setColor (color:string):void{
        this.color = color;
    }

    public setIs5G (is5G:boolean):void{
        this.is5G = is5G;
    }

    public setCameraNumber (cameraNumber:number):void{
        this.cameraNumber = cameraNumber;
    }

    public setPrice (price:number):void{
        this.price = price;
    }

    //Metodos publicos

    public printPhones():void{
        console.log(`Name: ${this.name}\nModel: ${this.model}\nTradeMark: ${this.trademark}\nSD Size (GB): ${this.sdSize}\nColor: ${this.color}\nIs 5G?: ${this.is5G}\nNumber of Cameras: ${this.cameraNumber}\n`);
        
    }


}