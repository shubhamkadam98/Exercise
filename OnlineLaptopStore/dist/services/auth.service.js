"use strict";
var AuthService = (function () {
    function AuthService() {
        this.loggedIn = false;
    }
    AuthService.prototype.authenticate = function (username, password) {
        if (username === 'admin' && password === 'admin') {
            this.loggedIn = true;
            return true;
        }
        return false;
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return AuthService;
}());
angular.module('LaptopStore').service('AuthService', AuthService);
