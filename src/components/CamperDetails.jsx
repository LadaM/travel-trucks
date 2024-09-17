import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchCamperDetails } from '../store/camperDetailsSlice';
import css from './CamperDetails.module.css';
import BookingForm from './BookingForm.jsx';
import CamperRating from './CamperRating.jsx';
import clsx from 'clsx';

const CamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.camperDetails.camper);

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  if (!camper) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2>{camper.name}</h2>
        <div className={css.headerInfo}>
          <div className={css.headerInfoItem}>
            <CamperRating reviews={camper.reviews} />
            <span>{camper.location}</span>
          </div>
          <h2>€{camper.price.toFixed(2)}</h2>
        </div>
      </div>
      <div className={css.gallery}>
        {camper.gallery.map((image, index) => (
          <img key={index} src={image.thumb} alt={`Gallery image ${index}`} />
        ))}
      </div>
      <p className={css.body1Grey}>{camper.description}</p>
      <div className={css.navigation}>
        <NavLink to={`/catalog/${id}/features`} state={{ camper }}
                 className={({ isActive }) => clsx(isActive && css.active, css.tabLink)}>Features</NavLink>
        <NavLink to={`/catalog/${id}/reviews`} state={{ camper }}
                 className={({ isActive }) => clsx(isActive && css.active, css.tabLink)}>Reviews</NavLink>
      </div>

      <div className={css.detailsContainer}>
        <div className={css.subpageContainer}>
          <Outlet />
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default CamperDetails;
