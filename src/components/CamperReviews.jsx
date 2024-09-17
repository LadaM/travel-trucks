import { FaStar } from 'react-icons/fa';
import css from './CamperReviews.module.css';
import { useLocation } from 'react-router-dom';

const ReviewsPage = () => {
  const location = useLocation();
  const { camper } = location.state || {};
  const reviews = camper.reviews || [];

  if (!camper || reviews.length === 0) {
    return <p>No reviews available</p>;
  }

  return (
    <div className={css.container}>
      {reviews.map((review, index) => (
        <div className={css.reviewContainer} key={index}>
          <div className={css.header}>
            <div className={css.avatar}><h2>{review.reviewer_name[0]}</h2></div>
            <div className={css.headerInfo}>
              <p className={css.body2}>{review.reviewer_name}</p>
              <div className={css.rating}>
                {Array.from({ length: review.reviewer_rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
          <p className={css.body1Grey}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsPage;
