import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Label } from '../types';
import { labelsInitialState } from './initialState';
import { TState } from './store';

const labelsAdapter = createEntityAdapter<Label>({
  sortComparer: (a, b) => a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase()),
});

const emptyInitialState = labelsAdapter.getInitialState();
const filledState = labelsAdapter.upsertMany(emptyInitialState, labelsInitialState);

export const { actions: labelsActions, reducer: labelsReducer } = createSlice({
  name: "labels",
  initialState: filledState,
  reducers: {
    create: {
      prepare({ title }) {
        const payload = new Label({ title });
        // "Class instances are by definition not fully serializable"
        // See https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using
        return { payload: { ...payload } };
      },
      reducer: labelsAdapter.addOne,
    },
    remove: labelsAdapter.removeOne,
  },
});

export const selectors = { ...labelsAdapter.getSelectors((state: TState) => state.labels) };
