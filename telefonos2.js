"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var nokia3210 = new mobile_1.Mobile("Nokia", 3210, "N3210", 3, "Rojo", false, 45, 125);
var iphone3G = new mobile_1.Mobile("Iphone", 6, "I6", 16, "White", true, 25, 255);
var samsungG10 = new mobile_1.Mobile("Samsung", 10, "Glaxy10", 256, "Black", true, 125, 1259);
console.log(nokia3210.getSdSize());
nokia3210.setCameraNumber(4);
nokia3210.setIs5G(true);
// nokia3210.printPhones();
// iphone3G.printPhones();
// samsungG10.printPhones();
var list = [nokia3210, iphone3G, samsungG10];
for (var i = 0; i < list.length; i++) {
    list[i].printPhones();
}
