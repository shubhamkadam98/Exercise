"use strict";
angular.module('LaptopStore', ['ngRoute'])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
        templateUrl: 'src/views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
    })
        .when('/cart', {
        templateUrl: 'src/views/cart.html',
        controller: 'CartController',
        controllerAs: 'vm'
    })
        .otherwise({ redirectTo: '/login' });
});
