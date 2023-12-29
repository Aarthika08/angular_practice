// src/app/shopping-cart/shopping-cart.component.ts

import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingcartItem } from './shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [`
    /* Your styles go here */
  `],
})
export class ShoppingCartComponent {
  items: ShoppingcartItem[] = [];
  newItemName: string = '';
  newItemPrice: number = 0;
  newItemQuantity: number = 1;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.items = this.shoppingCartService.getItems();
  }

  addItem(): void {
    if (this.newItemName && this.newItemPrice > 0 && this.newItemQuantity > 0) {
      const newItem: ShoppingcartItem = {
        id: Date.now(),
        name: this.newItemName,
        price: this.newItemPrice,
        quantity: this.newItemQuantity,
      };

      this.shoppingCartService.addItem(newItem);
      this.items = this.shoppingCartService.getItems();

      // Reset input fields after adding item
      this.newItemName = '';
      this.newItemPrice = 0;
      this.newItemQuantity = 1;
    }
  }

  getTotalValue(): number {
    return this.shoppingCartService.getTotalValue();
  }

  removeItem(itemId: number): void {
    this.shoppingCartService.removeItem(itemId);
    this.items = this.shoppingCartService.getItems();
  }

  increaseQuantity(itemId: number): void {
    this.shoppingCartService.increaseQuantity(itemId);
    this.items = this.shoppingCartService.getItems();
  }

  decreaseQuantity(itemId: number): void {
    this.shoppingCartService.decreaseQuantity(itemId);
    this.items = this.shoppingCartService.getItems();
  }

  clearCart(): void {
    this.shoppingCartService.clearCart();
    this.items = this.shoppingCartService.getItems();
  }
}
