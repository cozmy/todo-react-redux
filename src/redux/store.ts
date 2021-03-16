import { configureStore } from "@reduxjs/toolkit";

import { labelsReducer } from "./labels";
import { todosReducer } from "./todos";

export const store = configureStore({
  reducer: {
    labels: labelsReducer,
    todos: todosReducer,
  },
});

export type TState = ReturnType<typeof store.getState>;
