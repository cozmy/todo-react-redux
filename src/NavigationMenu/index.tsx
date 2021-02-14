import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../routes';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  linkActive: {
    background: theme.palette.action.selected,
  },
}));

function NavigationMenu() {
  const classes = useStyles();

  return (
    <List component="nav">
      <ListItem button component={NavLink} exact to={routes.overview} activeClassName={classes.linkActive}>
        <ListItemText primary="Overview" />
      </ListItem>

      <ListItem button component={NavLink} to={routes.calendar} activeClassName={classes.linkActive}>
        <ListItemText primary="Calendar" />
      </ListItem>

      {/*
          <ListItem button onClick={() => setOpen(!open)}>
            <ListItemText primary="Lists"/>
            {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          </ListItem>

          <Collapse in={open} timeout="auto">
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText secondary="Personal"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText secondary="Work"/>
              </ListItem>
            </List>
          </Collapse>


        <ListItem button>
          <ListItemText primary="Statistics" secondary="Coming soon..."/>
        </ListItem>
      */}
    </List>
  );
}

export default React.memo(NavigationMenu);
