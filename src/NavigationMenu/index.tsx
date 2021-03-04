import { Collapse, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { labelsSelectors } from "../redux/labels";
import { routes } from "../routes";

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
  const [open, setOpen] = React.useState(true);
  const labels = useSelector(labelsSelectors.selectAll);

  return (
    <List component="nav">
      <ListItem button component={NavLink} exact to={routes.overview} activeClassName={classes.linkActive}>
        <ListItemText primary="Overview" />
      </ListItem>

      <ListItem button component={NavLink} to={routes.calendar} activeClassName={classes.linkActive}>
        <ListItemText primary="Calendar" />
      </ListItem>

      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText primary="Labels" />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>

      <Collapse in={open} timeout="auto">
        <List component="div" disablePadding>
          {labels.map((label) => (
            <ListItem button component={NavLink} to={routes.label.to(label.id)} className={classes.nested} activeClassName={classes.linkActive} key={label.id}>
              <ListItemText secondary={label.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>

      {/* 
      <ListItem button>
        <ListItemText primary="Statistics" secondary="Coming soon..." />
      </ListItem>
      */}
    </List>
  );
}

export default React.memo(NavigationMenu);
