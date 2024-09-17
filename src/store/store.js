import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campersSlice';
import camperDetailsReducer from './camperDetailsSlice.js';
import filterReducer from './filterSlice.js';
import favoritesReducer from './favoritesSlice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    camperDetails: camperDetailsReducer,
    filters: filterReducer,
    favorites: favoritesReducer,
  },
});
