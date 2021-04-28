import {Mobile} from "./mobile";





let nokia3210 = new Mobile("Nokia",3210,"N3210",3,"Rojo",false,45,125);
let iphone3G = new Mobile("Iphone",6,"I6",16,"White",true,25,255);
let samsungG10 = new Mobile("Samsung",10,"Glaxy10",256,"Black",true,125,1259);


console.log("Nombre "+nokia3210.name+"\n"+"Modelo- "+nokia3210.model+"\n"+"TradeMark- "+nokia3210.trademark+"\n"+"Memoria- "+nokia3210.sdSize+"\n"+"Color"+nokia3210.color+"\n"+"5G- "+nokia3210.is5G+"\n"+"Cámara- "+nokia3210.cameraNumber+"\n"+"Precio- "+nokia3210.price+" €");
console.log("\n");
console.log("Nombre "+iphone3G.name+"\n"+"Modelo- "+iphone3G.model+"\n"+"TradeMark- "+iphone3G.trademark+"\n"+"Memoria- "+iphone3G.sdSize+"\n"+"Color"+iphone3G.color+"\n"+"5G- "+iphone3G.is5G+"\n"+"Cámara- "+iphone3G.cameraNumber+"\n"+"Precio- "+iphone3G.price+" €");
console.log("\n");
console.log("Nombre "+samsungG10.name+"\n"+"Modelo- "+samsungG10.model+"\n"+"TradeMark- "+samsungG10.trademark+"\n"+"Memoria- "+samsungG10.sdSize+"\n"+"Color"+samsungG10.color+"\n"+"5G- "+samsungG10.is5G+"\n"+"Cámara- "+samsungG10.cameraNumber+"\n"+"Precio- "+samsungG10.price+" €");


