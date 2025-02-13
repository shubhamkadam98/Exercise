// import app from "../app.module";

// class AuthController {
//   isAuthenticated: boolean;

//   static $inject = ["AuthService"];
//   constructor(private AuthService: any) {
//     this.isAuthenticated = AuthService.isAuthenticated();
//   }
// }

// app.controller("AuthController", AuthController);
// class AuthController {
//     static $inject = ['AuthService'];

//     constructor(private authService: AuthService) {}

//     login(username: string, password: string) {
//         if (this.authService.authenticate(username, password)) {
//             alert('Login successful!');
//         } else {
//             alert('Invalid credentials');
//         }
//     }
// }

// angular.module('LaptopStore').controller('AuthController', AuthController);
class AuthController {
    static $inject = ['AuthService'];

    constructor(private authService: AuthService) {}

    login(username: string, password: string) {
        if (this.authService.authenticate(username, password)) {
            alert('Login successful!');
        } else {
            alert('Invalid credentials');
        }
    }
}

angular.module('LaptopStore').controller('AuthController', AuthController);
