import { Component } from 'react';
import { connect } from 'react-redux';
import OfferList from '../offer/OfferList';
import ProductFeed from '../product/ProductFeed';
import { fetchTopRatedProducts, fetchLatestProducts } from '../../actions';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTopRatedProducts();
    this.props.fetchLatestProducts();
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
          <div className='container'>
            {this.renderProductsFeed(this.props.topRatedProducts, 'Top Rated')}
            {this.renderProductsFeed(
              this.props.latestProducts,
              'Latest Products'
            )}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    latestProducts: state.products.latestProducts,
    topRatedProducts: state.products.topRatedProducts,
  };
};

export default connect(mapStateToProps, {
  fetchTopRatedProducts,
  fetchLatestProducts,
})(HomePage);
