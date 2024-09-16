import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCamperDetails } from '../services/campersApi.js';

export const fetchCamperDetails = createAsyncThunk('camperDetails/fetchCamperDetails', async (id) => {
  const data = await getCamperDetails(id);
  return data;
});

const camperDetailsSlice = createSlice({
  name: 'camperDetails',
  initialState: {
    camper: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.camper = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default camperDetailsSlice.reducer;
