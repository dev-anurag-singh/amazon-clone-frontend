import { Link } from 'react-router-dom';

const ProductFeedCard = ({ data }) => {
  return (
    <Link to={`/products/${data.slug}`} className='product-feed__card'>
      <img
        src={data.coverImage}
        alt='product feed card'
        className='product-feed__image'
      />
    </Link>
  );
};

export default ProductFeedCard;
