import { Link } from 'react-router-dom';

const OfferCard = ({ data }) => {
  const offerTitle = data.title.split('|');

  return (
    <div className='offer__card'>
      <h4 className='offer__heading'>
        <span>{`${offerTitle[0]}|`}</span>
        <span>{`${offerTitle[1]}`}</span>
      </h4>
      <Link to={data.refTo}>
        <img src={data.image} alt='offer' className='offer__img' />
      </Link>

      <Link to={data.refTo} className='btn-text'>
        See more
      </Link>
    </div>
  );
};

export default OfferCard;
