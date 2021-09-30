import { Component } from 'react';
import { connect } from 'react-redux';
import OfferCard from './OfferCard';

class OfferList extends Component {
  renderOfferCard() {
    return this.props.data.map(el => {
      return <OfferCard key={el.id} data={el} />;
    });
  }

  render() {
    return <div className='offer__list'>{this.renderOfferCard()}</div>;
  }
}

const mapStateToProps = state => {
  return { data: state.offerFeed };
};

export default connect(mapStateToProps)(OfferList);
