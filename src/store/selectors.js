import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state) => state.campers.items;

export const selectFilters = (state) => state.filters;

export const selectCamper = (state) => state.camperDetails.camper;

// Combined selector to get filtered campers
export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    if (!Array.isArray(campers)) return [];

    return campers.filter((camper) => {
      // Location match
      const matchesLocation = filters.location
        ? camper.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      // Vehicle type match (form)
      const matchesVehicleType = filters.vehicleTypes.length
        ? filters.vehicleTypes.includes(camper.form)
        : true;

      // Equipment match (each equipment must be true in camper object)
      const matchesEquipment = filters.equipment.length
        ? filters.equipment.every((eq) => camper[eq] === true)
        : true;

      return matchesLocation && matchesVehicleType && matchesEquipment;
    });
  }
);
