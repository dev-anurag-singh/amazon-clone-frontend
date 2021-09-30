import products from '../apis/products';
import {
  FETCH_TOP_RATED_PRODUCTS,
  FETCH_LATEST_PRODUCTS,
  FETCH_VALUE_FOR_MONEY_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_FAILURE,
  CLEAR_PRODUCT_STATE,
} from './types';

export const fetchTopRatedProducts = () => async dispatch => {
  try {
    const response = await products.get('/top-rated');

    dispatch({ type: FETCH_TOP_RATED_PRODUCTS, payload: response.data.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchLatestProducts = () => async dispatch => {
  try {
    const response = await products.get('/latest');

    dispatch({ type: FETCH_LATEST_PRODUCTS, payload: response.data.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchValueForMoneyProducts = () => async dispatch => {
  try {
    const response = await products.get('/value-for-money');

    dispatch({
      type: FETCH_VALUE_FOR_MONEY_PRODUCTS,
      payload: response.data.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchProduct = id => async dispatch => {
  try {
    const response = await products.get(`/${id}`);

    dispatch({
      type: FETCH_PRODUCT,
      payload: response.data.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_FAILURE,
      payload: err.response.data,
    });
  }
};

export const clearProductState = () => {
  return {
    type: CLEAR_PRODUCT_STATE,
  };
};
