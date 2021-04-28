"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    //metodos getters y setters
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    /********************************** */
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    /********************************************* */
    //Metodos
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var totalPrice = 0; //creo la variable donde guardo el resultado, inicializado a 0
        for (var i = 0; i < this.mobiles.length; i++) { //recorro el array de tipo Mobile desde la posicion 0 a la ultima
            totalPrice += this.mobiles[i].getPrice(); //en la variable creada al principio recojo el resultado de 
        } //sumar, dentro de getPrice, todos los elemntos "price"
        return totalPrice; //retorno la variabel con su nuevo valor.
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("\n***************************************");
        console.log("\n" + "This is all my mobiles" + "\n");
        console.log("***************************************");
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log("The Characteristics Of The Mobile " + this.mobiles[i].getName() + " Are:\n");
            console.log("\n" + this.mobiles[i].printPhones() + "\n");
            console.log("***************************************");
        }
        console.log("Price overall: " + this.totalPrice + " \u20AC");
        console.log("***************************************");
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
