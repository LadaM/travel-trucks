import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from '../services/campersApi.js';

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async () => {
  const data = await getCampers();
  return data.items;
});

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers = action.payload || [];
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
