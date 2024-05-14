

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  count: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.count++;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.count--;
    },
    clearBasket: (state) => {
      state.items = [];
      state.count = 0;
    },
  },  addItem: (state, action) => {
    const newItem = action.payload;
    const existingItem = state.items.find(item => item.id === newItem.id);

    if (!existingItem) {
      newItem.count = 1; // Eğer öğe sepette yoksa, sayıyı 1 olarak ayarla
      state.items.push(newItem);
      state.count += 1; // Toplam öğe sayısını artır
    }
  },
});

export const { addItem, removeItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
