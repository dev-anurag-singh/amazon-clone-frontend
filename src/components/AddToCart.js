import { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../actions/cart';

class AddToCart extends Component {
  onButtonClick = event => {
    event.target.innerHTML = 'Adding...';
    event.target.style.backgroundColor = 'var(--color-white-grey)';
    event.target.style.border = '2px solid var(--color-yellow-dark-2)';

    setTimeout(() => {
      // CALLING ACTION CREATOR TO ADD PRODUCT TO CART

      this.props.addProductToCart(this.props.product, this.props.quantity);
      event.target.innerHTML = 'Add to Cart';
      event.target.style.backgroundColor = 'var(--color-yellow-dark-2)';
      event.target.style.border = '2px solid transparent';
    }, 1000);
  };

  render() {
    return (
      <button
        onClick={e => this.onButtonClick(e)}
        style={{ border: '2px solid transparent' }}
        className='btn btn--yellow btn--rounded btn--full'
      >
        Add to Cart
      </button>
    );
  }
}

export default connect(null, { addProductToCart })(AddToCart);
