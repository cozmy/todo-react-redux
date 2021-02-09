# Todo App example using Typescript, Redux Toolkit, React, and React Router

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and used [Gnome TODO](https://wiki.gnome.org/Apps/Todo) as inspiration.

Its aim is to showcase how easy is to use [Redux Toolkit](https://redux-toolkit.js.org/) instead of pure Redux, while building a todo app.

### Motivation

The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"

### Components Structure

- `<App />`
- `<NavigationMenu />` - this is the navigation menu that is used to switch between Calendar and Overview pages.
- `<Calendar />` - connects to Redux to get all the Todos which have a `dueDate` by using the `selectWithDueDate` selector
- `<Overview />` - connects to Redux to get all the Todos via `selectAll` or incomplete ones via `selectAllIncomplete`; it also dispatches `create` actions
- `<Todo title description completionDate dueDate priority />` - used to render a Todo and to dispatch `update` and `remove` actions

*Although the implementation is in React, this component structure would also work in Svelte, Vue, or Angular.*

### Redux Structure

The store is used to hold multiple Todos.

A Todo implements this interface:

```typescript
interface Todo {
  id: string;
  title: string;
  description?: string;
  creationDate: Date | string;
  dueDate?: Date | string;
  priority: TTodoPriority;
  completionDate?: Date | string;
}
```

There are only 3 actions:

- `create({title}: {title: string})`
- `update({id, changes}: {id: string; changes: Partial<Todo>})`
- `remove(id: string)`

From Redux Toolkit, these two are the main functions that were used:

#### [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter)

A function that generates a set of prebuilt reducers and selectors for performing CRUD operations on a [normalized state structure](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) containing instances of a particular type of data
object.

```typescript
const todosAdapter = createEntityAdapter<Todo>({
  sortComparer: (a, b) => {
    // sorting logic: by completion, priority, due date, creation date
  },
});
```

#### [createSlice](https://redux-toolkit.js.org/api/createSlice)

A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

```typescript
export const {actions, reducer} = createSlice({
  name: "todos",
  initialState: filledState,
  reducers: {
    create: {
      prepare(partialTodo: Partial<Todo>) {
        const payload = new Todo(partialTodo);
        // "Class instances are by definition not fully serializable"
        // See https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using
        return {payload: {...payload}};
      },
      reducer: todosAdapter.addOne
    },
    update: todosAdapter.updateOne,
    remove: todosAdapter.removeOne,
  },
});
```
