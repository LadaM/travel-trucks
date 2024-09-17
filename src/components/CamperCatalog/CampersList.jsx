import css from './CampersList.module.css';
import PropTypes from 'prop-types';
import CamperListItem from './CamperListItem.jsx';
import { camperShape } from '../../camperPropTypes.js';

const CamperList = ({ campers }) => {
  return (
    <div className={css.container}>
      {Array.isArray(campers) && campers.length > 0 ? (
        campers.map((camper) => (
          <CamperListItem camper={camper} key={camper.id} />
        ))
      ) : (
        <p>No campers available</p>
      )}
    </div>
  );
};

CamperList.propTypes = {
  campers: PropTypes.arrayOf(camperShape),
};

export default CamperList;
