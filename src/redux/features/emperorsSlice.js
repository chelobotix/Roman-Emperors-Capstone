/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  emperorsArray: null,
  dynasty: null,
  isLoading: false,
  isError: false,
};

export const fetchEmperors = createAsyncThunk('get/emperors', async () => {
  const url = 'https://documentation-resources.opendatasoft.com/api/records/1.0/search/?dataset=roman-emperors&q=&lang=en&rows=68&sort=index&facet=dynasty';
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

export const emperorsSlice = createSlice({
  name: 'Emperors',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEmperors.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(fetchEmperors.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      emperorsArray: action.payload,
      dynasty: [...action.payload.facet_groups[0].facets],
    }));

    builder.addCase(fetchEmperors.rejected, (state) => ({
      ...state,
      isError: true,
      isLoading: false,
    }));
  },
});

export default emperorsSlice.reducer;
