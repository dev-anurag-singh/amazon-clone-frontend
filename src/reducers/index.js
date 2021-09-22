import { combineReducers } from 'redux';
import offerReducer from './offerReducer';
import productReducer from './productReducer';

export default combineReducers({
  offerFeed: offerReducer,
  products: productReducer,
});
