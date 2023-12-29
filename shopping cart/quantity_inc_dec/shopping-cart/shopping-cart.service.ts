// src/app/shopping-cart/shopping-cart.service.ts

import { Injectable } from '@angular/core';
import { ShoppingcartItem } from './shopping-cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private items: ShoppingcartItem[] = [];

  getItems(): ShoppingcartItem[] {
    return this.items;
  }

  addItem(item: ShoppingcartItem): void {
    const existingItem = this.items.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  getTotalValue(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter((item) => item.id !== itemId);
  }

  increaseQuantity(itemId: number): void {
    const item = this.items.find((i) => i.id === itemId);

    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(itemId: number): void {
    const item = this.items.find((i) => i.id === itemId);

    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }

  clearCart(): void {
    this.items = [];
  }
}
