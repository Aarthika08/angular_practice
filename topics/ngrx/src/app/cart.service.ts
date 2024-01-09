import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './store/cart.state';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  updateCartItems(cartItems: CartItem[]) {
    this.cartItemsSubject.next(cartItems);
  }
}
