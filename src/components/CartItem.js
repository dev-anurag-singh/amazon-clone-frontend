import { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import { updateProductInCart } from '../actions/cart';

class CartItem extends Component {
  state = { quantity: this.props.product.quantity };

  onQuantityChange = q => {
    this.props.updateProductInCart(this.props.index, q);
    this.setState({ quantity: q });
  };

  render() {
    const product = this.props.product;
    return (
      <li className='cart__item'>
        <div className='cart__item-image'>
          <img src={product.coverImage} alt={product.brand} />
        </div>
        <div className='cart__item-detail'>
          <p>{product.name}</p>

          <span>${product.price}</span>
          <div className='u-margin-bottom-sm'>
            <Dropdown
              onChange={this.onQuantityChange}
              label='Quantity:'
              options={[1, 2, 3, 4, 5]}
              value={this.state.quantity}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default connect(null, { updateProductInCart })(CartItem);
