import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperDetails } from '../store/camperDetailsSlice';
import { useParams } from 'react-router-dom';

const CamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { camper, loading, error } = useSelector((state) => state.camperDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperDetails(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading camper details...</p>;
  if (error) return <p>Error loading camper details: {error}</p>;
  if (!camper) return <p>No camper details available</p>;

  return (
    <div className="camper-details">
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
      <div className="camper-features">
        <p><strong>Transmission:</strong> {camper.transmission}</p>
        <p><strong>Engine:</strong> {camper.engine}</p>
        <p><strong>AC:</strong> {camper.AC ? 'Yes' : 'No'}</p>
        <p><strong>Bathroom:</strong> {camper.bathroom ? 'Yes' : 'No'}</p>
        <p><strong>Kitchen:</strong> {camper.kitchen ? 'Yes' : 'No'}</p>
        <p><strong>TV:</strong> {camper.TV ? 'Yes' : 'No'}</p>
        <p><strong>Radio:</strong> {camper.radio ? 'Yes' : 'No'}</p>
        <p><strong>Refrigerator:</strong> {camper.refrigerator ? 'Yes' : 'No'}</p>
        <p><strong>Microwave:</strong> {camper.microwave ? 'Yes' : 'No'}</p>
        <p><strong>Gas:</strong> {camper.gas ? 'Yes' : 'No'}</p>
        <p><strong>Water:</strong> {camper.water ? 'Yes' : 'No'}</p>
      </div>
      <div className="camper-specs">
        <p><strong>Form:</strong> {camper.form}</p>
        <p><strong>Length:</strong> {camper.length}m</p>
        <p><strong>Width:</strong> {camper.width}m</p>
        <p><strong>Height:</strong> {camper.height}m</p>
        <p><strong>Tank Capacity:</strong> {camper.tank} liters</p>
        <p><strong>Fuel Consumption:</strong> {camper.consumption} L/100km</p>
      </div>
    </div>
  );
};

export default CamperDetails;
