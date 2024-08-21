import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {


  productsaccessories: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService,private router:Router) {}

  ngOnInit() {
    this.productsaccessories = this.productService.getProductsaccessories();
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
