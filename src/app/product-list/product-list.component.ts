import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  producttrending: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService,private router:Router) {}

  ngOnInit() {
    this.producttrending = this.productService.getProducttrending();
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
  goTomenitems(){
    this.router.navigate(['/men'])
  }
  goTowomenitems(){
    this.router.navigate(['/women'])
  }
  goTotrendingitems(){
    this.router.navigate(['/trending'])
  }
  goToaccessoriesitems(){
    this.router.navigate(['/accessories'])
  }
  

}
