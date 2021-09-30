import { useRef } from 'react';

const Carousel = ({ children, childrenClassName }) => {
  const carouselRef = useRef();

  let scrollTo = 0;

  const onBtnClick = ({ next }) => {
    const clientWidth = carouselRef.current.clientWidth;
    const cardWidth = document.querySelector(
      `.${childrenClassName}`
    ).clientWidth;
    const scrollingWidth = clientWidth - (clientWidth % cardWidth);

    const maxScroll = carouselRef.current.scrollwidth;

    // CHECKING IF PREV SCROLL IS NEEDED OR NEXT SCROLL

    if (next) {
      scrollTo = scrollTo + scrollingWidth;

      // CHECKING IF THE COMPONENT IS FULLY SCROLLED

      if (scrollTo > maxScroll) {
        scrollTo = maxScroll;
      }
    } else {
      scrollTo = scrollTo - scrollingWidth;

      if (scrollTo < 0) {
        scrollTo = 0;
      }
    }

    carouselRef.current.scroll(scrollTo, 0);
  };

  const onScroll = e => {
    scrollTo = e.target.scrollLeft;
  };

  // RENDERING THE FEED CAROUSEL COMPONENT
  return (
    <div className='feed-carousel'>
      <button
        onClick={() => onBtnClick({ next: false })}
        className='carousel-btn carousel-btn--left'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='carousel-btn__icon'
          viewBox='0 0 16 16'
        >
          <path d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z' />
        </svg>
      </button>
      <button
        onClick={() => onBtnClick({ next: true })}
        className='carousel-btn carousel-btn--right'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='carousel-btn__icon'
          viewBox='0 0 16 16'
        >
          <path d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z' />
        </svg>
      </button>
      <div
        onScroll={onScroll}
        ref={carouselRef}
        className='feed-carousel__shelf'
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
