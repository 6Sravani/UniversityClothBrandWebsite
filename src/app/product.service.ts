import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productswomen: any[] = [
    { name: 'University White Shirt', price: 250, imageUrl: '../assets/picture/women/6-logo.jpg' },
    { name: 'SHIRT', price: 300, imageUrl: '../assets/picture/women/7-logo.jpeg' },
    { name: 'University Huddy', price: 500, imageUrl: '../assets/picture/women/9-logo.jpeg' },
    { name: 'University Sweater', price: 600, imageUrl: '../assets/picture/women/10-logo.jpeg' },
    { name: 'Red Sweater', price: 600, imageUrl: '../assets/picture/women/11-logo.jpeg' },
    { name: 'Basic Huddy', price: 600, imageUrl: '../assets/picture/women/12-logo.jpeg' },
    { name: 'Ladies pique', price: 400, imageUrl: '../assets/picture/women/ladies pique.jpeg' },
    { name: 'Basic T-Shirt', price: 300, imageUrl: '../assets/picture/women/Basic T-Shirt.jpg' },
    { name: 'T-shirt', price: 300, imageUrl: '../assets/picture/women/T-shirt.jpeg' },
    { name: 'Classic T-shirt', price: 250, imageUrl: '../assets/picture/women/classic T-shirt.jpeg' },
    { name: 'Printed Heavy', price: 400, imageUrl: '../assets/picture/women/printed heavy.jpeg' },
    { name: 'University T-shirt', price: 400, imageUrl: '../assets/picture/women/university T-shirt.jpeg' },
    { name: 'Venice T-shirt', price: 300, imageUrl: '../assets/picture/women/venice-T-shirt.png' },
    // Add more products as needed
  ];

  cartItems: any[] = [];

  getProductswomen(): any[] {
    return this.productswomen;
  }

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
  producttrending: any[] = [
    {name:'Hoddy',price:1000,imageUrl:'../assets/picture/men/hoddy-white.jpg'},
    { name: 'Basic T-Shirt', price: 300, imageUrl: '../assets/picture/women/Basic T-Shirt.jpg' },
    { name: 'Black-cap', price: 250, imageUrl: '../assets/picture/acceseri/black-cap.jpg' },
    {name:'David Shirt',price:450,imageUrl:'../assets/picture/men/david.jpg'},
    { name: 'University White Shirt', price: 250, imageUrl: '../assets/picture/women/6-logo.jpg' },
    { name: 'XL aluminium waterbottle', price: 100, imageUrl: '../assets/picture/acceseri/XL aluminium waterbottle2.jpg' },
    {name:'white-T-shirt',price:400,imageUrl:'../assets/picture/men/white-T-shirt.jpg'},
    { name: 'Venice T-shirt', price: 300, imageUrl: '../assets/picture/women/venice-T-shirt.png' },
    { name: 'White Cup', price: 100, imageUrl: '../assets/picture/acceseri/cup-white.jpg' },

    // Add more products as needed
  ];

  getProducttrending(): any[] {
    return this.producttrending;
  }

  productsaccessories: any[] = [
    { name: 'Black Bag', price: 500, imageUrl: '../assets/picture/acceseri/bag-black.jpg' },
    { name: 'Drawstring Backpack', price: 300, imageUrl: '../assets/picture/acceseri/drawstring-backpack.jpg' },
    { name: 'Ballpoint Pen', price: 50, imageUrl: '../assets/picture/acceseri/ballpoint pen.jpg' },
    { name: 'Black-cap', price: 250, imageUrl: '../assets/picture/acceseri/black-cap.jpg' },
    { name: 'Caps', price: 500, imageUrl: '../assets/picture/acceseri/caps.jpg' },
    { name: 'Coffee Cup', price: 150, imageUrl: '../assets/picture/acceseri/coffee-cup.jpg' },
    { name: 'White Cup', price: 100, imageUrl: '../assets/picture/acceseri/cup-white.jpg' },
    { name: 'Laptop Sleeve', price: 300, imageUrl: '../assets/picture/acceseri/laptop sleeve.jpg' },
    { name: 'Pen Set', price: 50, imageUrl: '../assets/picture/acceseri/pen set.jpg' },
    { name: 'Squad Backpack', price: 550, imageUrl: '../assets/picture/acceseri/Squad Backpack.jpg' },
    { name: 'Transit Gym Bag', price: 200, imageUrl: '../assets/picture/acceseri/Transit Gym Bag.jpg' },
    { name: 'Wallet', price: 250, imageUrl: '../assets/picture/acceseri/Wallet.jpg' },
    { name: 'Water Bottle', price: 80, imageUrl: '../assets/picture/acceseri/water bottle.jpg' },
    { name: 'XL aluminium waterbottle', price: 100, imageUrl: '../assets/picture/acceseri/XL aluminium waterbottle.jpg' },
    { name: 'XL aluminium waterbottle', price: 100, imageUrl: '../assets/picture/acceseri/XL aluminium waterbottle2.jpg' },

    // Add more products as needed
  ];

  getProductsaccessories(): any[] {
    return this.productsaccessories;
  }

  productsmen:any[]=[
    {name:'White T-shirt',price:250,imageUrl:'../assets/picture/men/white-T-shirt.jpeg'},
    {name:'David Shirt',price:450,imageUrl:'../assets/picture/men/david.jpg'},
    {name:'Hoddy',price:1000,imageUrl:'../assets/picture/men/hoddy-white.jpg'},
    {name:'Basic T-Shirt',price:250,imageUrl:'../assets/picture/men/sports.jpg'},
    {name:'Seabeck Polo Men',price:500,imageUrl:'../assets/picture/men/Seabeck Polo Men.jpg'},
    {name:'T Long Sleeve T-shirt',price:600,imageUrl:'../assets/picture/men/T Long Sleeve T-shirt.jpeg'},
    {name:'white-sweater',price:500,imageUrl:'../assets/picture/men/white-sweater.jpg'},
    {name:'white-T-shirt',price:400,imageUrl:'../assets/picture/men/white-T-shirt.jpg'},
    {name:'fleece jacket',price:500,imageUrl:'../assets/picture/men/fleece jacket.jpeg'},
    {name:'Rollerneck T-shirt',price:600,imageUrl:'../assets/picture/men/Rollerneck T-shirt.jpeg'},
    {name:'Basic Roundneck',price:700,imageUrl:'../assets/picture/men/Basic Roundneck.jpeg'},
    {name:'comgridge shirt',price:400,imageUrl:'../assets/picture/men/comgridge shirt.jpeg'},
    {name:'basic sweatshirt',price:600,imageUrl:'../assets/picture/men/basic sweatshirt.png'},
    {name:'Advantage Polo',price:300,imageUrl:'../assets/picture/men/Advantage Polo.jpg'},
    {name:'half zip sweater',price:600,imageUrl:'../assets/picture/men/half zip sweater.jpeg'},
    {name:'Blue-T-shirt',price:300,imageUrl:'../assets/picture/men/blue-T-shirt.jpg'},
    {name:'Roundneck huddy',price:700,imageUrl:'../assets/picture/men/Roundneck huddy.jpeg'},
  ]
  getProductsmen():any[]{
    return this.productsmen;
  }
  categorie:any[]=[
    {name:'men',imageUrl:'../assets/picture/men/white-T-shirt.jpg'},
    {name:'women',imageUrl:'../assets/picture/women/6-logo.jpg'},
    {name:'accessories',imageUrl:'../assets/picture/acceseri/ballpoint pen.jpg'}
  ]
  getcategorie():any[]{
    return this.categorie
  }
}
