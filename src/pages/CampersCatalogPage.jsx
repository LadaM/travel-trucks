import { useSelector } from 'react-redux';
import { selectFilteredCampers } from '../store/selectors';
import CampersSearchForm from '../components/CamperCatalog/CampersSearchForm.jsx';
import CamperList from '../components/CamperCatalog/CampersList.jsx';
import css from './CampersCatalogPage.module.css';

const CampersPage = () => {
  const filteredCampers = useSelector(selectFilteredCampers);

  return (
    <div className={css.container}>
      <CampersSearchForm />
      <CamperList campers={filteredCampers} />
    </div>
  );
};

export default CampersPage;
