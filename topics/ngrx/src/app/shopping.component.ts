// // shopping.component.ts
// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { addItemToCart, removeItemFromCart, addToFavorites, removeFromFavorites } from './cart.actions';
// import { selectCartItems, selectFavoriteItems } from './cart.selectors';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

// @Component({
//   selector: 'app-shopping',
//   templateUrl: './shopping.component.html'})

// export class ShoppingComponent {
//   products: Product[] = [
//     // Sample product data
//     { id: 1, name: 'Product 1', price: 20, description: 'Description 1', imageUrl: 'product1.jpg' },
//     { id: 2, name: 'Product 2', price: 30, description: 'Description 2', imageUrl: 'product2.jpg' },
//     // Add more products as needed
//   ];

//   cartItems$ = this.store.select(selectCartItems);
//   favoriteItems$ = this.store.select(selectFavoriteItems);

//   constructor(private store: Store) {}

//   onAddToCart(product: Product) {
//     this.store.dispatch(addItemToCart({ item: product }));
//   }

//   onRemoveFromCart(product: Product) {
//     this.store.dispatch(removeItemFromCart({ item: product }));
//   }

//   onAddToFavorites(product: Product) {
//     this.store.dispatch(addToFavorites({ item: product }));
//   }

//   onRemoveFromFavorites(product: Product) {
//     this.store.dispatch(removeFromFavorites({ item: product }));
//   }
// }




// shopping.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItemToCart, removeItemFromCart, addToFavorites, removeFromFavorites } from './cart.actions';
import { selectCartItems, selectFavoriteItems } from './cart.selectors';
// import { ShoppingcartItem } from './shopping-cart-item.model';
// import { ShoppingCartService } from './shopping-cart.service';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }
@Component({
  selector: 'app-shopping',
  templateUrl:'./shopping.component.html',
})


export class ShoppingComponent {
   
    products: Product[] = [
      // Sample product data
      { id: 1, name: 'Product 1', price: 20, description: 'Description 1', imageUrl: './assets/product1.jpg' },
      { id: 2, name: 'Product 2', price: 30, description: 'Description 2', imageUrl: './assets/product2.jpg' },
      { id: 3, name: 'Product 3', price: 40, description: 'Description 3', imageUrl: './assets/product3.png' },
      { id: 4, name: 'Product 4', price: 140, description: 'Description 4', imageUrl: './assets/product4.png' },
      { id: 5, name: 'Product 5', price: 200, description: 'Description 5', imageUrl: './assets/product5.png' },
      { id: 6, name: 'Product 6', price: 100, description: 'Description 6', imageUrl: './assets/product6.png' },
      { id: 7, name: 'Product 7', price: 100, description: 'Description 7', imageUrl: './assets/product7.png' },
      { id: 8, name: 'Product 8', price: 270, description: 'Description 8', imageUrl: './assets/product8.png' },
      { id: 9, name: 'Product 9', price: 140, description: 'Description 3', imageUrl: './assets/product9.png' },
      { id: 10, name: 'Product 10', price: 40, description: 'Description 10', imageUrl: './assets/product10.png' },


      // Add more products as needed
    ];
  
    cartItems$ = this.store.select(selectCartItems);
    favoriteItems$ = this.store.select(selectFavoriteItems);
  
    constructor(private store: Store) {}
  
    onAddToCart(product: Product) {
      this.store.dispatch(addItemToCart({ item: product }));
    }
  
    onRemoveFromCart(product: Product) {
      this.store.dispatch(removeItemFromCart({ item: product }));
    }
  
    onAddToFavorites(product: Product) {
      this.store.dispatch(addToFavorites({ item: product }));
    }
  
    onRemoveFromFavorites(product: Product) {
      this.store.dispatch(removeFromFavorites({ item: product }));
    }
  }