// import app from "../app.module";

// class CartService {
//   private cart: any[] = [];

//   addToCart(item: any) {
//     this.cart.push(item);
//   }

//   getCart(): any[] {
//     return this.cart;
//   }

//   removeFromCart(index: number) {
//     this.cart.splice(index, 1);
//   }
// }

// app.service("CartService", CartService);
// class CartService {
//     private items: string[] = [];

//     addItem(item: string) {
//         this.items.push(item);
//     }

//     getItems() {
//         return this.items;
//     }
// }

// angular.module('LaptopStore').service('CartService', CartService);

class CartService {
    private items: string[] = [];

    addItem(item: string) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }
}

angular.module('LaptopStore').service('CartService', CartService);
