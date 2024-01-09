// cart.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items
);

export const selectFavoriteItems = createSelector(
  selectCartState,
  (state) => state.favorites
);
