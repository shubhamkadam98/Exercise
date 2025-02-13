"use strict";
var LoginController = (function () {
    function LoginController($location, authService) {
        this.$location = $location;
        this.authService = authService;
    }
    LoginController.prototype.login = function (username, password) {
        if (this.authService.authenticate(username, password)) {
            this.$location.path('/cart');
        }
        else {
            alert('Invalid credentials!');
        }
    };
    LoginController.$inject = ['$location', 'AuthService'];
    return LoginController;
}());
angular.module('LaptopStore').controller('LoginController', LoginController);
