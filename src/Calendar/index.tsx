import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectors } from '../redux/todos';
import Todo from '../Todo';
import happyIcon from './happy.svg';

export const useStyles = makeStyles((theme) => ({
  dueDate: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(3),

    "&:first-of-type": {
      marginTop: 0,
    },
  },
  iconContainer: {
    textAlign: "center",
  },
  icon: {
    height: 250,
    margin: `${theme.spacing(5)}px 0`,
  },
  iconCredits: {
    color: theme.palette.text.secondary,
    fontSize: 10,
    opacity: 0.25,
  },
  iconCreditsLink: {
    color: `${theme.palette.text.secondary} !important`,
  },
}));

function Calendar() {
  const classes = useStyles();
  const todos = useSelector(selectors.selectWithDueDate);

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((value, index, array) => (
          <React.Fragment key={value.id}>
            {value.formatedDueDate !== array[index - 1]?.formatedDueDate ? (
              <Typography className={classes.dueDate} variant="h5">
                {value.formatedDueDate}
              </Typography>
            ) : null}

            <Todo key={value.id} {...value} />
          </React.Fragment>
        ))
      ) : (
        <div className={classes.iconContainer}>
          <img className={classes.icon} src={happyIcon} />
          <Typography variant="h4">All done, you're awesome!</Typography>
          <Typography className={classes.iconCredits} color="secondary" variant="body2">
            Icon from{" "}
            <a className={classes.iconCreditsLink} href="https://www.flaticon.com/free-icon/happy_2374630" target="_blank" rel="noreferrer">
              Flaticon
            </a>
          </Typography>
        </div>
      )}
    </div>
  );
}

export default React.memo(Calendar);
