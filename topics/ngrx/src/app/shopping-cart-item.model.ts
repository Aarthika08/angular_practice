// src/app/models/product.model.ts
export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export interface ShoppingCartItem extends Product {
    quantity: number;
  }
  