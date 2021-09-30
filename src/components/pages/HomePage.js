import { Component } from 'react';
import { connect } from 'react-redux';
import OfferList from '../OfferList';
import ProductFeed from '../ProductFeed';
// IMPORTING PRODUCTS ACTION CREATOR
import {
  fetchTopRatedProducts,
  fetchLatestProducts,
  fetchValueForMoneyProducts,
} from '../../actions/products';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTopRatedProducts();
    this.props.fetchLatestProducts();
    this.props.fetchValueForMoneyProducts();
  }

  renderProductsFeed(data, title) {
    return <ProductFeed productsData={data} heading={title} />;
  }

  render() {
    return (
      <div className='page-content'>
        <section className='section-hero'>
          <div className='container'>
            <OfferList />
          </div>
        </section>
        <section className='section-products'>
          {this.renderProductsFeed(this.props.topRatedProducts, 'Top Rated')}
          {this.renderProductsFeed(
            this.props.latestProducts,
            'Latest Products'
          )}
          {this.renderProductsFeed(
            this.props.valueForMoneyProducts,
            'Value for Money'
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    latestProducts: state.products.latestProducts,
    topRatedProducts: state.products.topRatedProducts,
    valueForMoneyProducts: state.products.valueForMoneyProducts,
  };
};

export default connect(mapStateToProps, {
  fetchTopRatedProducts,
  fetchLatestProducts,
  fetchValueForMoneyProducts,
})(HomePage);
