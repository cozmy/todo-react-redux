# Todo App example using React, Redux Toolkit, Typescript, and React Router

![Preview](preview-1.png?raw=true)
![Preview](preview-2.png?raw=true)
![Preview](preview-3.png?raw=true)
![Preview](preview-4.png?raw=true)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and used [Gnome TODO](https://wiki.gnome.org/Apps/Todo) as inspiration.

Its aim is to showcase how easy is to use [Redux ToolKit](https://redux-toolkit.js.org/) (RTK) instead of pure Redux, while building a todo app. RTK includes utilities that help simplify many common use cases, including [store setup](https://redux-toolkit.js.org/api/configureStore), [creating reducers and writing immutable update logic](https://redux-toolkit.js.org/api/createreducer), and even [creating entire "slices" of state at once](https://redux-toolkit.js.org/api/createslice).

**Two smaller demos are set up on CodeSandbox:**
- [One for createSlice](https://codesandbox.io/s/createslice-playground-idwi3?file=/src/index.js)
- [One for createEntityAdapter](https://codesandbox.io/s/createentityadapter-playground-cm5ye?file=/src/index.js)

### Motivation

The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"

### Components Structure

- `<App />`
- `<NavigationMenu />` - this is the navigation menu on the left
- `<Calendar />` - connects to Redux to get all the Todos which have a `dueDate` by using the `selectWithDueDate` selector
- `<Overview />` - connects to Redux to get all the Todos via `selectAll` or incomplete ones via `selectAllIncomplete`; optionally, if it receives `labelId` as a URL parameter, then it passes this to the aforementioned selectors; it also dispatches `create` actions;
- `<Todo title description completionDate dueDate labels priority />` - used to render a Todo and to dispatch `update` and `remove` actions
- `<LabelsSelect {...TextFieldProps} /> and <LabelsPreview value />` - components which help in working with Labels

_Although the implementation is in React, this component structure would also work in Svelte, Vue, or Angular._

### Redux Structure

The store is used to hold multiple Todos and Labels.

```typescript
interface Todo {
  id: string;
  title: string;
  description?: string;
  creationDate: Date | string;
  dueDate?: Date | string;
  priority: TTodoPriority;
  completionDate?: Date | string;
  labels: Array<Label["id"]>;
}

interface Label {
  id: string;
  title: string;
  // TODO add a color?: string; property
}
```

There are only 3 actions:

- `todosActions.create({title}: {title: string})`
- `todosActions.update({id, changes}: {id: string; changes: Partial<Todo>})`
- `todosActions.remove(id: string)`

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
export const { actions, reducer } = createSlice({
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
```
