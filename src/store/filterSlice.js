import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    vehicleTypes: [],
    equipment: [],
  },
  reducers: {
    setFilters: (state, action) => {
      console.log(action.payload)
      return { ...state, ...action.payload };
    },
    resetFilters: () => {
      return { location: '', vehicleTypes: [], equipment: [] };
    },
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
