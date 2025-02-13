// import * as angular from "angular";

// const app = angular.module("laptopStore", []);

// export default app;
angular.module('LaptopStore', ['ngRoute']);


    .config(($routeProvider: ng.route.IRouteProvider) => {
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

