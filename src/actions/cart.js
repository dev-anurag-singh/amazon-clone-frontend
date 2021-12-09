import _ from 'lodash';
import { ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART } from './types';

export const addProductToCart = (product, quantity) => (dispatch, getState) => {
  let products = getState().shoppingCart.cartItems;
  // CONVERTING PRODUCTS OBJECT INTO ARRAY
  products = Object.values(products);
  // ADDING UNIQUE IDENTIFIER
  const cartId = product._id + new Date().getTime();

  products.push({ ...product, quantity, cartId });
  // SETTING PRODUCTS IN LOCAL STORAGE
  localStorage.setItem('cart', JSON.stringify(products));
  // DISPATCHING ACTION TO REDUCER
  dispatch({ type: ADD_TO_CART, payload: { ...product, quantity, cartId } });
};

export const updateProductInCart =
  (cartId, quantity) => (dispatch, getState) => {
    let products = getState().shoppingCart.cartItems;
    // CHANGING QUANTITY
    products[cartId].quantity = quantity;
    // UPDATING CART
    localStorage.setItem('cart', JSON.stringify(Object.values(products)));

    dispatch({
      type: UPDATE_CART,
      payload: products[cartId],
    });
  };

export const removeProductFromCart = cartId => (dispatch, getState) => {
  let products = getState().shoppingCart.cartItems;

  products = Object.values(_.omit(products, cartId));

  localStorage.setItem('cart', JSON.stringify(products));

  dispatch({
    type: REMOVE_FROM_CART,
    payload: cartId,
  });
};
