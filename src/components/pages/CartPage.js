import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';

class CartPage extends Component {
  componentDidMount() {
    // SCROLLING TO TOP
    window.scroll(0, 0);
  }
  renderCartItems = () => {
    return this.props.products.map(product => {
      return <CartItem key={product.cartId} product={product} />;
    });
  };

  render() {
    if (!this.props.products.length) {
      return (
        <div className='page-content bg-cl-white-grey'>
          <h2 className='heading-secondary text-center u-padding-medium'>
            Your Shopping Cart is Empty
          </h2>
          <h3 className='fs-md text-center'>
            Go to Amazon{' '}
            <Link className='link' to='/'>
              Home
            </Link>{' '}
            Page
          </h3>
        </div>
      );
    }
    return (
      <div className='page-content bg-cl-white-grey'>
        <div className='cart-container'>
          <div className='cart'>
            <h2 className='heading-secondary br-bottom-1px'>Shopping Cart</h2>
            <ul className='cart-product__list'>{this.renderCartItems()}</ul>
          </div>
          <div className='cart-summary'>
            <h4 className='cart-summary__title'>Price Details</h4>
            <div className='cart-summary__item'>
              <span>Quantity</span>
              <span>{this.props.quantity}</span>
            </div>
            <div className='cart-summary__item'>
              <span>Price</span>
              <span>${this.props.price}</span>
            </div>
            <div className='cart-summary__item'>
              <span>Delivery Charge</span>
              <span>$15</span>
            </div>
            <div className='cart-summary__item'>
              <span>Discount</span>
              <span>-$15</span>
            </div>
            <hr />
            <div style={{ fontWeight: 600 }} className='cart-summary__item'>
              <span>Total Amount</span>
              <span>${this.props.price}</span>
            </div>
            <hr />
            <p className='cart-summary__text'>
              You will save $15 on this order
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.shoppingCart.cartItems),
    quantity: state.shoppingCart.cartQuantity,
    price: state.shoppingCart.cartPrice,
  };
};

export default connect(mapStateToProps)(CartPage);
