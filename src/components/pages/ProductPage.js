import { connect } from 'react-redux';
import { fetchProduct, clearProductState } from '../../actions/products';

import Dropdown from '../Dropdown';
import AddToCart from '../AddToCart';
import ShopFeature from '../ShopFeature';
import Ratings from '../util/Ratings';
import ImageViewer from '../ImageViewer';
import ErrorBox from '../ErrorBox';

const { Component } = require('react');

class ProductPage extends Component {
  state = { quantity: 1 };

  componentDidMount() {
    // FETCHING PRODUCT
    this.props.fetchProduct(this.props.match.params.id);

    // SCROLLING TO TOP
    window.scroll(0, 0);
  }

  onQuantityChange = q => {
    this.setState({ quantity: q });
  };

  componentWillUnmount() {
    // THIS WILL CLEAR PRODUCT STATE
    this.props.clearProductState();
  }

  renderProductSidebar(className) {
    return (
      <div className={`product-sidebar ${className}`}>
        <div className='product-sidebar__price-box'>
          <span className='text'>One time purchase: </span>
          <span className='amount'>{`$${this.props.product.price}`}</span>
        </div>
        <div className='u-margin-bottom-sm'>
          <Dropdown
            onChange={this.onQuantityChange}
            label='Quantity:'
            options={[1, 2, 3, 4, 5]}
            value={this.state.quantity}
          />
        </div>
        <div className='u-margin-bottom-sm'>
          <AddToCart
            product={this.props.product}
            quantity={this.state.quantity}
          />
        </div>
        <div className='shop-feature-box'>
          <ShopFeature />
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.product && !this.props.error) {
      return (
        <div className='page-content'>
          <div className='loader'></div>
        </div>
      );
    } else if (this.props.error) {
      return <ErrorBox />;
    } else {
      return (
        <div className='page-content container'>
          <div className='product'>
            <ImageViewer
              images={[
                this.props.product.coverImage,
                ...this.props.product.images,
              ]}
            />
            <div className='product__detail'>
              <h2 className='product__title'>{this.props.product.name}</h2>
              <div className='product__rating'>
                <span className='icons'>
                  <Ratings rating={this.props.product.ratingsAverage} />
                </span>
                <span className='reviews-count'>
                  {this.props.product.ratingsCount} ratings
                </span>
              </div>
              {/* Only show this component when screen width is less than 1088px */}
              {this.renderProductSidebar('ds-visible-68em')}
              <table className='table'>
                <tbody>
                  <tr className='table-row'>
                    <td className='fw-600'>Brand</td>
                    <td>{this.props.product.brand}</td>
                  </tr>
                  <tr className='table-row'>
                    <td className='fw-600'>Color</td>
                    <td>{this.props.product.color}</td>
                  </tr>
                  <tr className='table-row'>
                    <td className='fw-600'>Price</td>
                    <td>{`$${this.props.product.price}`}</td>
                  </tr>
                  <tr className='table-row'>
                    <td className='fw-600'>Stock Left</td>
                    <td>{`${this.props.product.stock} pcs`}</td>
                  </tr>
                </tbody>
              </table>
              <h4 className='fs-sm u-margin-bottom-sm'>About this Product</h4>
              <p className='product__description'>
                {this.props.product.description}
              </p>
            </div>
            {/* Product sidebar will be hidden below 1088px */}
            {this.renderProductSidebar('ds-none-68em')}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  if (state.products.product.data) {
    return { product: state.products.product.data };
  } else if (state.products.product.error) {
    return { error: state.products.product.error };
  } else {
    return { product: null };
  }
};

export default connect(mapStateToProps, { fetchProduct, clearProductState })(
  ProductPage
);
