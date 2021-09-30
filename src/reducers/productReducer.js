import {
  FETCH_TOP_RATED_PRODUCTS,
  FETCH_LATEST_PRODUCTS,
  FETCH_VALUE_FOR_MONEY_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_FAILURE,
  CLEAR_PRODUCT_STATE,
} from '../actions/types';

const productsState = {
  topRatedProducts: [],
  latestProducts: [],
  valueForMoneyProducts: [],
  product: {},
};

const productReducer = (state = productsState, action) => {
  switch (action.type) {
    case FETCH_TOP_RATED_PRODUCTS:
      return { ...state, topRatedProducts: [...action.payload] };
    case FETCH_LATEST_PRODUCTS:
      return { ...state, latestProducts: [...action.payload] };
    case FETCH_VALUE_FOR_MONEY_PRODUCTS:
      return { ...state, valueForMoneyProducts: [...action.payload] };
    case FETCH_PRODUCT:
      return { ...state, product: { data: { ...action.payload } } };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, product: { error: { ...action.payload } } };
    case CLEAR_PRODUCT_STATE:
      return { ...state, product: {} };
    default:
      return state;
  }
};

export default productReducer;
