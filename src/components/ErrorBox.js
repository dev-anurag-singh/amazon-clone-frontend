import { Link } from 'react-router-dom';

const ErrorBox = () => {
  return (
    <div className='page-content'>
      <div style={{ padding: '5rem 2rem 0' }} className='wd-max mr-auto'>
        <h3 className='u-margin-bottom-xsm fs-md cl-orange'>
          Looking for something?
        </h3>
        <p className='u-margin-bottom-sm fs-sm'>
          We're sorry. The web address you entered is not a functioning page on
          our site
        </p>
        <h3 className='fs-md'>
          Go to Amazon{' '}
          <Link className='link' to='/'>
            Home
          </Link>{' '}
          Page
        </h3>
      </div>
    </div>
  );
};

export default ErrorBox;
