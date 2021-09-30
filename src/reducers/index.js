import { combineReducers } from 'redux';
import offerReducer from './offerReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  offerFeed: offerReducer,
  products: productReducer,
  shoppingCart: cartReducer,
});
