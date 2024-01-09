// cart.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addItemToCart, removeItemFromCart, addToFavorites, removeFromFavorites } from './cart.actions';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface CartState {
  items: Product[];
  favorites: Product[];
}

export const initialState: CartState = {
  items: [],
  favorites: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, { item }) => ({ ...state, items: [...state.items, item] })),
  on(removeItemFromCart, (state, { item }) => ({
    ...state,
    items: state.items.filter((i) => i !== item),
  })),
  on(addToFavorites, (state, { item }) => {
    // Check if the item is not already in the favorites
    if (!state.favorites.find((favItem) => favItem.id === item.id)) {
      return { ...state, favorites: [...state.favorites, item] };
    }

    // If the item is already in the favorites, return the current state
    return state;
  }),
  on(removeFromFavorites, (state, { item }) => ({
    ...state,
    favorites: state.favorites.filter((i) => i !== item),
  }))
);
