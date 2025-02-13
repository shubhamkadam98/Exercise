// import app from "../app.module";

// class LoginController {
//   username: string;
//   password: string;

//   static $inject = ["$location", "AuthService"];
//   constructor(private $location: angular.ILocationService, private AuthService: any) {
//     this.username = "";
//     this.password = "";
//   }

//   login() {
//     if (this.AuthService.authenticate(this.username, this.password)) {
//       this.$location.path("/cart");
//     } else {
//       alert("Invalid credentials");
//     }
//   }
// }

// app.controller("LoginController", LoginController);
class LoginController {
    static $inject = ['$location', 'AuthService'];

    constructor(private $location: ng.ILocationService, private authService: AuthService) {}

    login(username: string, password: string) {
        if (this.authService.authenticate(username, password)) {
            this.$location.path('/cart');
        } else {
            alert('Invalid credentials!');
        }
    }
}

angular.module('LaptopStore').controller('LoginController', LoginController);
