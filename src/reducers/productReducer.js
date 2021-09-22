import {
  FETCH_TOP_RATED_PRODUCTS,
  FETCH_LATEST_PRODUCTS,
} from '../actions/types';

const productsState = {
  topRatedProducts: [],
  latestProducts: [],
};

const productReducer = (state = productsState, action) => {
  switch (action.type) {
    case FETCH_TOP_RATED_PRODUCTS:
      return { ...state, topRatedProducts: [...action.payload] };
    case FETCH_LATEST_PRODUCTS:
      return { ...state, latestProducts: [...action.payload] };
    default:
      return state;
  }
};

export default productReducer;
