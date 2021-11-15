import { ADD_TO_CART, UPDATE_CART } from '../actions/types';

let cartState = [];
if (localStorage.getItem('cart')) {
  cartState = [...JSON.parse(localStorage.getItem('cart'))];
}

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case UPDATE_CART:
      return [...action.payload];
    default:
      return state;
  }
};

export default cartReducer;
