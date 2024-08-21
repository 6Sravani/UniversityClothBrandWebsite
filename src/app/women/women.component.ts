import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  productswomen: any[] = [];

  constructor(private productService: ProductService, private router:Router,private cartService: CartService) {}

  ngOnInit() {
    this.productswomen = this.productService.getProductswomen();
  }

  addToCart(product: any) {
    this.productService.addToCart(product);
    this.cartService.addToCart(product).subscribe(
      () => {
        console.log('Cart item added successfully');
        // Additional logic for success case
      },
      (error) => {
        console.error('Error adding cart item:', error);
        // Additional logic for error case
      }
    );

  }
  

}
