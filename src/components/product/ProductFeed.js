import { Component } from 'react';
import FeedCarousel from '../FeedCarousel';
import ProductFeedCard from './ProductFeedCard';

class ProductFeed extends Component {
  renderProductFeedCards = () => {
    return this.props.productsData.map(product => {
      return <ProductFeedCard key={product._id} data={product} />;
    });
  };

  renderFeedCarousel() {
    if (this.props.productsData.length === 0) {
      return <div className='div-skeleton-load'></div>;
    }
    return (
      <FeedCarousel childrenClassName='product-feed__card'>
        <>{this.renderProductFeedCards()}</>
      </FeedCarousel>
    );
  }

  render() {
    return (
      <div className='product-feed'>
        <h3 className='product-feed__heading'>{this.props.heading}</h3>
        {this.renderFeedCarousel()}
      </div>
    );
  }
}

export default ProductFeed;
