import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { UserDataService } from '../user-data.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems: any[]=[];
  name:string='';
  constructor(private productService: ProductService,private router: Router,private cartService: CartService,private userDataService:UserDataService) {}

  ngOnInit() {
    this.cartItems = this.productService.getCartItems();
    this.name = this.userDataService.name;

  }

  getTotalPrice(): number {
    return this.productService.getTotalPrice();
  }

  checkout() {
    // Implement your checkout process here
    alert('Checkout process initiated!');
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  removeFromCart(item: any) {
    this.cartService.removeFromCart(item).subscribe(
      () => {
        console.log('Cart item removed successfully');
        this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
      },
      error => {
        console.error('Error removing cart item:', error);
      }
    );
  }

  isItemInCart(item: any): boolean {
    return this.cartItems.includes(item);
  }

  }




