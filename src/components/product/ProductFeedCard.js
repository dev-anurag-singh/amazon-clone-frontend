import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ProductFeedCard = ({ data }) => {
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', () => {
      imageRef.current.classList.remove('skeleton-img');
    });
  }, []);

  return (
    <Link to={`/products/${data.slug}`} className='product-feed__card'>
      <img
        ref={imageRef}
        src={data.coverImage}
        alt='product feed card'
        className='product-feed__image skeleton-img'
      />
    </Link>
  );
};

export default ProductFeedCard;
