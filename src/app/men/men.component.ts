import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-women',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  productsmen: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService,private router:Router) {}

  ngOnInit() {
    this.productsmen = this.productService.getProductsmen();
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
