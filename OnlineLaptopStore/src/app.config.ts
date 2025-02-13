// // import app from "./app.module";

// // app.config([
// //   "$routeProvider",
// //   function ($routeProvider: angular.route.IRouteProvider) {
// //     $routeProvider
// //       .when("/login", {
// //         templateUrl: "src/views/login.html",
// //         controller: "LoginController",
// //         controllerAs: "vm",
// //       })
// //       .when("/cart", {
// //         templateUrl: "src/views/cart.html",
// //         controller: "CartController",
// //         controllerAs: "vm",
// //       })
// //       .otherwise({
// //         redirectTo: "/login",
// //       });
// //   },
// // ]);
// angular.module('LaptopStore')
//     .config(($routeProvider: ng.route.IRouteProvider) => {
//         $routeProvider
//             .when('/login', {
//                 templateUrl: 'src/views/login.html',
//                 controller: 'LoginController',
//                 controllerAs: 'vm'
//             })
//             .when('/cart', {
//                 templateUrl: 'src/views/cart.html',
//                 controller: 'CartController',
//                 controllerAs: 'vm'
//             })
//             .otherwise({ redirectTo: '/login' });
//     });
angular.module('LaptopStore')
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
