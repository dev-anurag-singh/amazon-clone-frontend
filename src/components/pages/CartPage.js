import { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem';

class CartPage extends Component {
  renderCartItems = () => {
    return this.props.products.map((product, i) => {
      return <CartItem key={product._id + i} index={i} product={product} />;
    });
  };

  render() {
    return (
      <div className='page-content bg-cl-white-grey'>
        <div className='container cart-container'>
          <div className='cart'>
            <h2 className='heading-secondary br-bottom-1px'>Shopping Cart</h2>
            <ul className='cart-product__list'>{this.renderCartItems()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.shoppingCart };
};

export default connect(mapStateToProps)(CartPage);
