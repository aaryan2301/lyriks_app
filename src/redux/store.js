import { configureStore } from '@reduxjs/toolkit';
import { shazam } from './services/shazamApi';
import { shazamCoreApi } from './services/shazamCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazam.reducerPath]: shazam.reducer,
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazam.middleware, shazamCoreApi.middleware),
});