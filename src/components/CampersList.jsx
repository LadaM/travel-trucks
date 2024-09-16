import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../store/campersSlice';
import { Link } from 'react-router-dom';
import css from './CampersList.module.css';

const CamperList = () => {
  const dispatch = useDispatch();
  const { campers, loading, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <p>Loading campers...</p>;
  if (error) return <p>Error loading campers: {error}</p>;

  return (
    <div className="campers-list">
      {Array.isArray(campers) && campers.length > 0 ? (
        campers.map((camper) => (
          <div key={camper.id} className="camper-card">
            <h3>{camper.name}</h3>
            <p>{camper.description}</p>
            <Link to={`/catalog/${camper.id}`}>
              <button className={css.primaryButton}>Show More</button>
            </Link>
          </div>
        ))
      ) : (
        <p>No campers available</p>
      )}
    </div>
  );
};

export default CamperList;
