import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../store/filterSlice';
import * as Yup from 'yup';
import { VEHICLE_EQUIPMENT_FILTERS, VEHICLE_TYPE_FILTERS } from '../constants.js';
import { selectFilters } from '../store/selectors.js';
import css from './CampersSearchForm.module.css';
import clsx from 'clsx';
import Icon from './Icon.jsx';

const filterSchema = Yup.object().shape({
  location: Yup.string().required('Location is required'),
  // vehicleTypes: Yup.array().min(1, 'Select at least one vehicle type'),
  // equipment: Yup.array().min(1, 'Select at least one equipment type'),
});

const CampersSearchForm = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSubmit = (values) => {
    console.log(values)
    dispatch(setFilters(values));
  };

  return (
    <Formik
      initialValues={filters}
      validationSchema={filterSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.container}>
          <div className={css.filterGroup}>
            <label>Location</label>
            <Field name="location" placeholder="Enter location..." className={css.input} />
            <ErrorMessage name="location" component="div" className={css.error} />
          </div>
          <label className={css.label}>Filters</label>
          <div className={css.filterGroup}>
            <h3>Vehicle Equipment</h3>
            <div className={css.buttonContainer}>
              {VEHICLE_EQUIPMENT_FILTERS.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() =>
                    setFieldValue(
                      'equipment',
                      values.equipment.includes(item)
                        ? values.equipment.filter((eq) => eq !== item)
                        : [...values.equipment, item],
                    )
                  }
                  className={clsx(css.button, css.filterButton, values.equipment.includes(item) && css.selected)}
                >
                  <Icon name={item} />
                  {item}
                </button>
              ))}
            </div>
            <ErrorMessage name="equipment" component="div" className={css.error} />
          </div>

          <div className={css.filterGroup}>
            <h3>Vehicle Types</h3>
            <div className={css.buttonContainer}>
              {VEHICLE_TYPE_FILTERS.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() =>
                    setFieldValue(
                      'vehicleTypes',
                      values.vehicleTypes.includes(type)
                        ? values.vehicleTypes.filter((v) => v !== type)
                        : [...values.vehicleTypes, type],
                    )
                  }
                  className={clsx(css.button, css.filterButton, values.vehicleTypes.includes(type) && css.selected)}
                >
                  <Icon name={type} />
                  {type}
                </button>
              ))}
            </div>
            <ErrorMessage name="vehicleTypes" component="div" className={css.error} />
          </div>

          <button type="submit" className={css.primaryButton}>Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default CampersSearchForm;
