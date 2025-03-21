import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (favorites) => {
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch {
    console.error('Failed to save favorites to local storage');
  }
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFromLocalStorage(),
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const index = state.indexOf(camperId);
      if (index === -1) {
        state.push(camperId);
      } else {
        state.splice(index, 1);
      }
      saveToLocalStorage(state);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
