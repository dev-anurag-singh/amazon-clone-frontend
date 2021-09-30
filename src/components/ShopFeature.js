import PaymentsIcon from '@mui/icons-material/Payments';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';

const ShopFeature = () => {
  return (
    <div className='shop-feature'>
      <div className='shop-feature__item'>
        <PaymentsIcon className='shop-feature__icon' />
        <span>Pay on Delivery</span>
      </div>
      <div className='shop-feature__item'>
        <AutorenewIcon className='shop-feature__icon' />
        <span>7 Days Replacement</span>
      </div>
      <div className='shop-feature__item'>
        <LocalShippingIcon className='shop-feature__icon' />
        <span>Amazon Delivered</span>
      </div>
      <div className='shop-feature__item'>
        <LockIcon className='shop-feature__icon' />
        <span>Secure Payments</span>
      </div>
    </div>
  );
};

export default ShopFeature;
