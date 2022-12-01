import { createAction, props } from '@ngrx/store';

export const addToWishlist = createAction(
  '[wishlist page] add to wishlist',
  props<{ products: any }>()
);
export const removeFromWishlist = createAction(
  '[wishlist page] reomve from wishlist',
  props<{ products: any }>()
);
