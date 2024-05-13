import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCard = createAsyncThunk('getCard', async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch products from the API');
  }
});

const initialState = {
  card: [],
  status: 'idle',
  error: null,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.card = action.payload;
      })
      .addCase(getCard.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cardSlice.reducer;
