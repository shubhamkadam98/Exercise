"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../app.module");
var CartController = (function () {
    function CartController(CartService) {
        this.CartService = CartService;
        this.cartItems = this.CartService.getCart();
    }
    CartController.prototype.removeItem = function (index) {
        this.CartService.removeFromCart(index);
    };
    CartController.$inject = ["CartService"];
    return CartController;
}());
app_module_1.default.controller("CartController", CartController);
