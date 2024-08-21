import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = 'http://localhost:3000';
  private cartItems: any[] = [];


  constructor(private http: HttpClient) {}

  addToCart(product: any) {
    const url = `${this.baseUrl}/cart/add`;
    const data = { product};
    return this.http.post(url, data);
  }
  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }

    const url = `${this.baseUrl}/cart/remove`;
    const data = { item };
    return this.http.post(url, data);
  }

  getCartItems() {
    return this.cartItems;
  }

  }
