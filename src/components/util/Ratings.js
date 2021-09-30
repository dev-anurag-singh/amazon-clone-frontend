import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

// TAKES THE RATINGS (eg=4.5) AND RENDERS FILLED, EMPETY AND HALF FILLED STAR ICONS

const Ratings = ({ rating }) => {
  const renderRatingsIcon = () => {
    let ratingsIcon = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        ratingsIcon.push(<StarIcon key={i} className='icon icon__star' />);
      } else {
        let ratingGap = (i * 10 - rating * 10) / 10;
        if (ratingGap < 0.3) {
          ratingsIcon.push(<StarIcon key={i} className='icon icon__star' />);
        } else if (ratingGap > 0.2 && ratingGap < 0.8) {
          ratingsIcon.push(
            <StarHalfIcon key={i} className='icon icon__star' />
          );
        } else {
          ratingsIcon.push(
            <StarBorderIcon key={i} className='icon icon__star' />
          );
        }
      }
    }
    return ratingsIcon;
  };

  return renderRatingsIcon();
};

export default Ratings;
