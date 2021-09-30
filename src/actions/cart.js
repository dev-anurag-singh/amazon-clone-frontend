import { ADD_TO_CART } from './types';

export const addProductToCart = (product, quantity) => {
  let products = [];
  if (localStorage.getItem('cart')) {
    products = JSON.parse(localStorage.getItem('cart'));
  }
  products.push({ ...product, quantity });

  localStorage.setItem('cart', JSON.stringify(products));

  return {
    type: ADD_TO_CART,
    payload: { ...product, quantity },
  };
};
