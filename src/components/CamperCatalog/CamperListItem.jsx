import { Link } from 'react-router-dom';
import css from './CamperListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/favoritesSlice.js';
import { FaRegHeart } from 'react-icons/fa';
import { ICONS } from '../../constants.js';
import Icon from '../Icon.jsx';
import clsx from 'clsx';
import CamperRating from '../CamperRating.jsx';
import { camperShape } from '../../camperPropTypes.js';

const CamperListItem = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.includes(camper.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={css.camperCard}>
      <img src={camper.gallery[0].thumb} alt={camper.name} className={css.thumbImage} />
      <div className={css.camperInfo}>
        <div className={css.cardHeaderContainer}>
          <div className={css.header}>
            <h2>{camper.name}</h2>
            <div className={css.headerRight}>
              <h2>€ {camper.price}</h2>
              <button onClick={handleFavoriteClick} className={clsx(css.favoriteButton, isFavorite && css.favorite)}>
                <FaRegHeart />
              </button>
            </div>
          </div>
          <div className={css.headerInfo}>
            <CamperRating reviews={camper.reviews} />
            <p className={css.body1}>{camper.location}</p>
          </div>
        </div>
        <p className={css.body1Grey}>{camper.description}</p>
        <div className={css.equipmentContainer}>
          {Object.keys(camper).map((key) => (
            key.toLowerCase() in ICONS && camper[key] && (
              <div key={key} className={clsx(css.equipmentChip, css.body2)}>
                <Icon name={key} />
                {key}
              </div>
            )
          ))}
        </div>
        <Link to={`/catalog/${camper.id}`}>
          <button className={clsx(css.button, css.primaryButton)}>Show More</button>
        </Link>
      </div>
    </div>
  );
};

CamperListItem.propTypes = {
  camper: camperShape.isRequired,
}

export default CamperListItem;
