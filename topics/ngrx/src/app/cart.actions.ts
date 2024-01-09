// cart.actions.ts
import { createAction, props } from '@ngrx/store';
import { Product } from './cart.reducer'; // Ensure that Product is imported from the correct location

export const addItemToCart = createAction(
  '[Cart] Add Item to Cart',
  props<{ item: Product }>()
);

export const removeItemFromCart = createAction(
  '[Cart] Remove Item from Cart',
  props<{ item: Product }>()
);

export const addToFavorites = createAction(
  '[Cart] Add To Favorites',
  props<{ item: Product }>()
);

export const removeFromFavorites = createAction(
  '[Cart] Remove From Favorites',
  props<{ item: Product }>()
);
