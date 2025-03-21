import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ICONS } from '../constants.js';
import Icon from './Icon.jsx';
import css from './CamperEquipment.module.css';

const CamperEquipment = ({ camper }) => {
  return (
    <div className={css.equipmentContainer}>
      {Object.keys(camper).map((key) => (
        key.toLowerCase() in ICONS && camper[key] && (
          <div key={key} className={clsx(css.equipmentChip, css.body2)}>
            <Icon name={key} />
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </div>
        )
      ))}
    </div>
  );
};

CamperEquipment.propTypes = {
  camper: PropTypes.object.isRequired,
};

export default CamperEquipment;
