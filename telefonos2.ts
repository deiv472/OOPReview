import {Mobile} from "./mobile";



let nokia3210 = new Mobile("Nokia",3210,"N3210",3,"Rojo",false,45,125);
let iphone3G = new Mobile("Iphone",6,"I6",16,"White",true,25,255);
let samsungG10 = new Mobile("Samsung",10,"Glaxy10",256,"Black",true,125,1259);


console.log(nokia3210.getSdSize());
nokia3210.setCameraNumber(4);
nokia3210.setIs5G(true);
// nokia3210.printPhones();
// iphone3G.printPhones();
// samsungG10.printPhones();

let list:Mobile[]= [nokia3210,iphone3G,samsungG10];

for (let i = 0; i < list.length; i++){
    list[i].printPhones();
}

