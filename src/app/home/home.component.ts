import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent {
  producttrending: any[]=[];
  categorie:any[]=[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.producttrending = this.productService.getProducttrending();
    this.categorie=this.productService.getcategorie();
  }

  addToCart(product: any) {
    this.productService.addToCart(product);
  }
}
