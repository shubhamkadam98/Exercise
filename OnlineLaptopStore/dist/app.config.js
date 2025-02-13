"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("./app.module");
app_module_1.default.config([
    "$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when("/login", {
            templateUrl: "src/views/login.html",
            controller: "LoginController",
            controllerAs: "vm",
        })
            .when("/cart", {
            templateUrl: "src/views/cart.html",
            controller: "CartController",
            controllerAs: "vm",
        })
            .otherwise({
            redirectTo: "/login",
        });
    },
]);
