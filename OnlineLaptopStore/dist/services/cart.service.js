"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../app.module");
var CartService = (function () {
    function CartService() {
        this.cart = [];
    }
    CartService.prototype.addToCart = function (item) {
        this.cart.push(item);
    };
    CartService.prototype.getCart = function () {
        return this.cart;
    };
    CartService.prototype.removeFromCart = function (index) {
        this.cart.splice(index, 1);
    };
    return CartService;
}());
app_module_1.default.service("CartService", CartService);
