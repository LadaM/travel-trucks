import { Link } from 'react-router-dom';
import css from './CampersList.module.css';

const CamperList = ({ campers }) => {

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
