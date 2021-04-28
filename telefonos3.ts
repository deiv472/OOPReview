import {Mobile} from "./mobile";
import {MobileLibrary} from "./mobileLibrary";


let nokia3210 = new Mobile("Nokia",3210,"N3210",3,"Rojo",false,45,125);
let iphone3G = new Mobile("Iphone",6,"I6",16,"White",true,25,255);
let samsungG10 = new Mobile("Samsung",10,"Glaxy10",256,"Black",true,125,1259);
let lg360 = new Mobile("Lg",360,"LG36",16,"Blue",true,5,255);


let pack1:Mobile[]=[nokia3210, iphone3G, samsungG10, lg360];

let packML:MobileLibrary = new MobileLibrary("Ofertas Primavera", "Centro Comercial Xanadú",pack1);

console.log(packML.getLocation());
console.log(packML.getMobiles());
console.log(packML.getName());

packML.setLocation("Calle Capitán Blanco Algibay 33");
packML.setName("Ofertas Sky Madrid");

console.log(packML.getLocation());
console.log(packML.getName());


