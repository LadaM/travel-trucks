import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import css from './CamperRating.module.css';

const CamperRating = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p className={css.body1}>No reviews</p>;
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.reviewer_rating, 0) / reviews.length;

  return (
    <div className={css.container}>
      <FaStar />
      <span className={css.body1}>{averageRating.toFixed(1)} ({reviews.length} reviews)</span>
    </div>
  );
};

CamperRating.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      reviewer_name: PropTypes.string,
      reviewer_rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CamperRating;
