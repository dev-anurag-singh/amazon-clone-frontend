import { ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART } from '../actions/types';
import _ from 'lodash';

let cartState = {
  cartItems: {},
  cartQuantity: 0,
  cartPrice: 0,
};

// ACCEPTS ARRAY
const getTotalPrice = cart => {
  let totalPrice = 0;
  cart.map(el => {
    totalPrice = totalPrice + el.price * el.quantity;
    return null;
  });
  return totalPrice;
};
const getTotalQuantity = cart => {
  let totalQuantity = 0;
  cart.map(el => {
    totalQuantity = totalQuantity + el.quantity;
    return null;
  });
  return totalQuantity;
};

if (localStorage.getItem('cart')) {
  // READING SHOPPING CART FROM LOCAL STORAGE
  const cartProducts = JSON.parse(localStorage.getItem('cart'));
  // SETTING CART ITEMS STATE
  cartState.cartItems = _.mapKeys(cartProducts, 'cartId');
  //SETTING CART QUANTITY AND TOTAL PRICE
  cartState.cartQuantity = getTotalQuantity(cartProducts);
  cartState.cartPrice = getTotalPrice(cartProducts);
}

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItems: {
          ...state.cartItems,
          [action.payload.cartId]: action.payload,
        },
        cartQuantity: state.cartQuantity + action.payload.quantity,
        cartPrice:
          state.cartPrice + action.payload.quantity * action.payload.price,
      };
    case UPDATE_CART:
      return {
        cartItems: {
          ...state.cartItems,
          [action.payload.cartId]: action.payload,
        },
        cartQuantity: getTotalQuantity(Object.values(state.cartItems)),
        cartPrice: getTotalPrice(Object.values(state.cartItems)),
      };
    case REMOVE_FROM_CART:
      // REMOVING PRODUCT USING CARTID
      const { quantity, price } = state.cartItems[action.payload];
      return {
        cartItems: _.omit(state.cartItems, action.payload),
        cartQuantity: state.cartQuantity - quantity,
        cartPrice: state.cartPrice - quantity * price,
      };
    default:
      return state;
  }
};

export default cartReducer;
