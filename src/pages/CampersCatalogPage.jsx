import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredCampers } from '../store/selectors';
import CampersSearchForm from '../components/CampersSearchForm';
import CamperList from '../components/CampersList';
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
