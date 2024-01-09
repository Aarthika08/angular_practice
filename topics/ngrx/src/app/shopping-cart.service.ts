// src/app/services/shopping.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from './cart.reducer';
import { ShoppingCartItem } from './shopping-cart-item.model';
import { selectCartItems } from './cart.selectors';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  cartItems$: Observable<ShoppingCartItem[]> = this.store.pipe(select(selectCartItems));

  constructor(private store: Store<AppState>) {}

  addItemToCart(item: ShoppingCartItem): void {
    this.store.dispatch(this.addItemToCart({ item }));
  }

  removeItemFromCart(item: ShoppingCartItem): void {
    this.store.dispatch(removeItemFromCart({ item }));
  }

  increaseQuantity(item: ShoppingCartItem): void {
    this.store.dispatch(increaseQuantity({ item }));
  }

  decreaseQuantity(item: ShoppingCartItem): void {
    this.store.dispatch(decreaseQuantity({ item }));
  }
}
