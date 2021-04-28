"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
//CLASS
var Mobile = /** @class */ (function () {
    //CONSTRUCTOR
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    //METODOS
    //getters
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    //setters
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setTradeMark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setIs5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    //Metodos publicos
    Mobile.prototype.printPhones = function () {
        console.log("Name: " + this.name + "\nModel: " + this.model + "\nTradeMark: " + this.trademark + "\nSD Size (GB): " + this.sdSize + "\nColor: " + this.color + "\nIs 5G?: " + this.is5G + "\nNumber of Cameras: " + this.cameraNumber + "\nPrice: " + this.price + " \u20AC");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
