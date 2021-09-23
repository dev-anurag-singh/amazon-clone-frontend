import products from '../apis/products';
import {
  FETCH_TOP_RATED_PRODUCTS,
  FETCH_LATEST_PRODUCTS,
  FETCH_VALUE_FOR_MONEY_PRODUCTS,
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
