import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campersSlice';
import camperDetailsReducer from './camperDetailsSlice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    camperDetails: camperDetailsReducer,
  },
});
