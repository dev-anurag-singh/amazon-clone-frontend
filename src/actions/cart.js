import _ from 'lodash';
import { ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART } from './types';

export const addProductToCart = (product, quantity) => {
  let products = [];
  if (localStorage.getItem('cart')) {
    products = JSON.parse(localStorage.getItem('cart'));
  }
  let time = new Date().getTime();

  products.push({ ...product, quantity, time });

  localStorage.setItem('cart', JSON.stringify(products));

  return {
    type: ADD_TO_CART,
    payload: { ...product, quantity, time },
  };
};

export const updateProductInCart = (index, quantity) => {
  let products = [];
  if (localStorage.getItem('cart')) {
    products = JSON.parse(localStorage.getItem('cart'));
  }
  products[index].quantity = quantity;

  localStorage.setItem('cart', JSON.stringify(products));

  return {
    type: UPDATE_CART,
    payload: [...products],
  };
};

export const removeProductFromCart = index => {
  let products = {};
  if (localStorage.getItem('cart')) {
    products = Object.assign({}, JSON.parse(localStorage.getItem('cart')));
  }

  products = Object.values(_.omit(products, index));

  localStorage.setItem('cart', JSON.stringify(products));

  return {
    type: REMOVE_FROM_CART,
    payload: [...products],
  };
};
