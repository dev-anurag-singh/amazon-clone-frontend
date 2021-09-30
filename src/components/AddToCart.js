import { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../actions/cart';

class AddToCart extends Component {
  render() {
    return (
      <button
        onClick={() =>
          this.props.addProductToCart(this.props.product, this.props.quantity)
        }
        className='btn btn--yellow btn--rounded btn--full'
      >
        Add to Cart
      </button>
    );
  }
}

export default connect(null, { addProductToCart })(AddToCart);
