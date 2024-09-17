import PropTypes from 'prop-types';

export const camperShape = PropTypes.shape({
  AC: PropTypes.bool,
  TV: PropTypes.bool,
  bathroom: PropTypes.bool,
  consumption: PropTypes.string,
  description: PropTypes.string.isRequired,
  engine: PropTypes.string,
  form: PropTypes.string,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string,
      original: PropTypes.string,
    })
  ),
  gas: PropTypes.bool,
  height: PropTypes.string,
  id: PropTypes.string.isRequired,
  kitchen: PropTypes.bool,
  length: PropTypes.string,
  location: PropTypes.string,
  microwave: PropTypes.bool,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  radio: PropTypes.bool,
  rating: PropTypes.number,
  refrigerator: PropTypes.bool,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      reviewer_name: PropTypes.string,
      reviewer_rating: PropTypes.number,
    })
  ),
  tank: PropTypes.string,
  transmission: PropTypes.string,
  water: PropTypes.bool,
  width: PropTypes.string,
});
