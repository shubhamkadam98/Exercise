"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../app.module");
var AuthController = (function () {
    function AuthController(AuthService) {
        this.AuthService = AuthService;
        this.isAuthenticated = AuthService.isAuthenticated();
    }
    AuthController.$inject = ["AuthService"];
    return AuthController;
}());
app_module_1.default.controller("AuthController", AuthController);
