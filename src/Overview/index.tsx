import { Button, Grid, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TState } from '../redux/store';
import { todosActions, todosSelectors } from '../redux/todos';
import Todo from '../Todo';

export const useStyles = makeStyles({
  textfield: {
    margin: 0,
  },
  button: {
    height: "100%",
  },
});

function Overview() {
  const classes = useStyles();

  const [newTodoTitle, setNewTodoTitle] = React.useState("");
  const [showDone, setShowDone] = React.useState(false);

  const todos = useSelector(showDone ? todosSelectors.selectAll : todosSelectors.selectAllIncomplete);
  const finishedCount = useSelector((state: TState) => todosSelectors.selectAll(state).length - todosSelectors.selectAllIncomplete(state).length);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((value) => (
        <Todo key={value.id} {...value} />
      ))}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={9} md={10}>
          <TextField
            className={classes.textfield}
            fullWidth
            onChange={(event) => setNewTodoTitle(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter" && newTodoTitle.length > 0) {
                dispatch(todosActions.create({ title: newTodoTitle }));
                setNewTodoTitle("");
              }
            }}
            placeholder="Plan something new"
            value={newTodoTitle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={2}>
          <Button className={classes.button} fullWidth onClick={() => setShowDone(!showDone)} size="medium" startIcon={showDone ? <VisibilityOffIcon /> : <VisibilityIcon />} variant="text">
            Done ({finishedCount})
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default React.memo(Overview);
