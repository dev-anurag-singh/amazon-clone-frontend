import { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import { updateProductInCart } from '../actions/cart';
import { Link } from 'react-router-dom';
import { RemoveFromCart } from './CartButton';

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
          <Link to={`/products/${product.slug}/${product._id}`}>
            <img src={product.coverImage} alt={product.brand} />
          </Link>
        </div>
        <div className='cart__item-detail'>
          <h4>{product.name}</h4>
          <p>{product.description.slice(0, 180)}</p>
          <span>${product.price}</span>
          <div className='u-margin-bottom-sm flex-al-center'>
            <Dropdown
              onChange={this.onQuantityChange}
              label='Quantity:'
              options={[1, 2, 3, 4, 5]}
              value={this.state.quantity}
            />
            <RemoveFromCart productIndex={this.props.index} />
          </div>
        </div>
      </li>
    );
  }
}

export default connect(null, { updateProductInCart })(CartItem);
