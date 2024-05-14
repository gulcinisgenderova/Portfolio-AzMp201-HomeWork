import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/counterSlice'
import cardReducer from '../redux/slices/cardSlice'
import basketReducer from '../redux/slices/basketSlices'



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    card: cardReducer,
    basket: basketReducer,

  },
})