// import app from "../app.module";

// class AuthService {
//   private users = [{ username: "admin", password: "admin" }];
//   private authenticated = false;

//   authenticate(username: string, password: string): boolean {
//     const user = this.users.find((u) => u.username === username && u.password === password);
//     this.authenticated = !!user;
//     return this.authenticated;
//   }

//   isAuthenticated(): boolean {
//     return this.authenticated;
//   }
// }

// app.service("AuthService", AuthService);
class AuthService {
    private loggedIn: boolean = false;

    authenticate(username: string, password: string): boolean {
        if (username === 'admin' && password === 'admin') {
            this.loggedIn = true;
            return true;
        }
        return false;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }
}

angular.module('LaptopStore').service('AuthService', AuthService);
