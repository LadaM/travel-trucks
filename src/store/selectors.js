import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state) => state.campers.items;

export const selectFilters = (state) => state.filters;

// Combined selector to get filtered campers
export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    // console.log(campers);
    return campers.filter((camper) => {
      const matchesLocation = filters.location
        ? camper.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      const matchesVehicleType = filters.vehicleTypes.length
        ? filters.vehicleTypes.includes(camper.form)
        : true;

      const matchesEquipment = filters.equipment.length
        ? filters.equipment.every((eq) => camper[eq] === true)  // Adjusted to check individual fields
        : true;

      return matchesLocation && matchesVehicleType && matchesEquipment;
    });
  }
);
