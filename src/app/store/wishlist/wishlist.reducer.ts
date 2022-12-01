import { addToWishlist, removeFromWishlist } from './wishlist.action';
import { createReducer, on } from '@ngrx/store';

const initialState = {
  items: [],
};

export const wishlistReducer = createReducer(
  initialState,
  on(addToWishlist, (state, action): any => {
    return {
      ...state,
      items: action.products,
    };
  }),
  on(removeFromWishlist, (state, action): any => ({
    ...state,
    items: action.products,
  }))
);
