

class CartController {
  cartItems: any[];

  static $inject = ["CartService"];
  constructor(private CartService: any) {
    this.cartItems = this.CartService.getCart();
  }

  removeItem(index: number) {
    this.CartService.removeFromCart(index);
  }
}

app.controller("CartController", CartController);
