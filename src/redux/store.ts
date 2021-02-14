import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './todos';

export const store = configureStore({
  reducer,
});

export type TState = ReturnType<typeof store.getState>;
