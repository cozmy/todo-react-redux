import { createDraftSafeSelector, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

import { dateFormat, Label, Todo } from "../types";
import { todosInitialState } from "./initialState";
import { TState } from "./store";

const applyDueDateSorting = (a: Todo, b: Todo) => (a.dueDate ? new Date(a.dueDate).getTime() : Infinity) - (b.dueDate ? new Date(b.dueDate).getTime() : Infinity);

const todosAdapter = createEntityAdapter<Todo>({
  sortComparer: (a, b) => {
    // TODO I can reuse applyDueDateSorting if i make it generic: (a, b, dateFieldName) but my TypeScript skills don't allow me :(
    const completionSorting = (a.completionDate ? new Date(a.completionDate).getTime() : Infinity) - (b.completionDate ? new Date(b.completionDate).getTime() : Infinity);
    if (completionSorting !== 0 && !isNaN(completionSorting)) return -1 * completionSorting;

    // Start and sort by priority
    const prioritySorting = b.priority - a.priority;
    if (prioritySorting !== 0) return prioritySorting;

    // Sort by due date, if they have the same priority
    const dueDateSorting = applyDueDateSorting(a, b);
    // Infinify - Infiniy === NaN
    if (dueDateSorting !== 0 && !isNaN(dueDateSorting)) return dueDateSorting;

    // Finally, sort by creation date (the newest one is at the bottom), if they have the same due date
    const creationDateSorting = new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime();
    return creationDateSorting;
  },
});

const emptyInitialState = todosAdapter.getInitialState();
const filledState = todosAdapter.upsertMany(emptyInitialState, todosInitialState);

export const { actions: todosActions, reducer: todosReducer } = createSlice({
  name: "todos",
  initialState: filledState,
  reducers: {
    create: {
      prepare(partialTodo: Partial<Todo>) {
        const payload = new Todo(partialTodo);
        // "Class instances are by definition not fully serializable"
        // See https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using
        return { payload: { ...payload } };
      },
      reducer: todosAdapter.addOne,
    },
    update: todosAdapter.updateOne,
    remove: todosAdapter.removeOne,
  },
});

const defaultSelectors = todosAdapter.getSelectors((state: TState) => state.todos);

const selectAll = createDraftSafeSelector([defaultSelectors.selectAll, (state: any, labelId?: Label["id"]) => labelId], (state, labelId) => (labelId ? state.filter((value) => value.labels.includes(labelId)) : state));

const selectAllIncomplete = createDraftSafeSelector(selectAll, (state) => state.filter((value) => !value.completionDate));

const selectWithDueDate = createDraftSafeSelector(selectAllIncomplete, (state) =>
  state
    .filter((value) => value.dueDate)
    .sort(applyDueDateSorting)
    .map((value) => ({ ...value, formatedDueDate: format(new Date(value.dueDate as string), dateFormat) })),
);

export const todosSelectors = { ...defaultSelectors, selectAll, selectAllIncomplete, selectWithDueDate };
