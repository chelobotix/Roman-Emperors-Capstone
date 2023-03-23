import { configureStore } from '@reduxjs/toolkit';
import emperorsReducer from '../features/emperorsSlice';

const store = configureStore({
  reducer: {
    emperors: emperorsReducer,
  },
});

export default store;
