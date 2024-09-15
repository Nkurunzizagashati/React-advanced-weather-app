import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weather';
const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
