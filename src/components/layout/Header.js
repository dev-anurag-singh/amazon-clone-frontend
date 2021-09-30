import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <header className='header'>
      <Link to='/' className='header__logo-box'>
        <img
          src='/images/Amazon_logo.svg'
          alt='amazon logo'
          className='header__logo'
        />
      </Link>
      <div className='header__location-box'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='icon__location'
          viewBox='0 0 16 16'
        >
          <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
        </svg>
        <div className='header__location-detail'>
          <span className='span-1'>Deliver to Anurag</span>
          <span className='span-2'>Muzaffarpur 842001</span>
        </div>
      </div>
      <div className='header__search-box'>
        <SearchBar />
      </div>
      <div className='header__tools'>
        <Link to='/signin' className='header__item'>
          <span className='span-1'>Hello, Sign in</span>
          <span className='span-2'>Account & Lists</span>
        </Link>
        <Link to='/myorders' className='header__item'>
          <span className='span-1'>Returns</span>
          <span className='span-2'>& Orders</span>
        </Link>
        <Link to='/mycart' className='header__item'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='icon__cart'
            viewBox='0 0 16 16'
          >
            <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
          </svg>
          <span className='span__cart-no'>
            {props.productInCart ? props.productInCart : 0}
          </span>
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  let productInCart = 0;
  if (state.shoppingCart.length !== 0) {
    state.shoppingCart.forEach(el => {
      productInCart = productInCart + el.quantity;
    });
  }

  return { productInCart };
};

export default connect(mapStateToProps)(Header);
