import css from './CamperFeatures.module.css';
import { useLocation } from 'react-router-dom';
import CamperEquipment from '../CamperEquipment.jsx';

const FeaturesPage = () => {
  const location = useLocation();
  const { camper } = location.state || {};

  if (!camper) {
    return <p>No camper data available</p>;
  }

  return (
    <div className={css.container}>
      <CamperEquipment camper={camper} />
      <div>
        <h3>Vehicle details</h3>
        <hr className={css.ruler} />
        <div className={css.featureList}>
          <div className={css.featureItem}><p className={css.body1}>Form</p>{camper.form}</div>
          <div className={css.featureItem}><p className={css.body1}>Length</p>{camper.length}</div>
          <div className={css.featureItem}><p className={css.body1}>Width</p>{camper.width}</div>
          <div className={css.featureItem}><p className={css.body1}>Height</p>{camper.height}</div>
          <div className={css.featureItem}><p className={css.body1}>Tank</p>{camper.tank}</div>
          <div className={css.featureItem}><p className={css.body1}>Consumption</p>{camper.consumption}</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
