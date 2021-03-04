import { AppBar, Box, Container, CssBaseline, Drawer, IconButton, makeStyles, Toolbar, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Calendar from "./Calendar";
import NavigationMenu from "./NavigationMenu";
import Overview from "./Overview";
import { routes } from "./routes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appContainer: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerOpen: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: drawerWidth,
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
  },
  linkActive: {
    textDecoration: "underline",
  },
}));

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"), {
    noSsr: true,
  });

  const [drawerOpen, setDrawerOpen] = React.useState(matches);

  React.useEffect(() => setDrawerOpen(matches), [matches]);

  const classes = useStyles();

  return (
    <Container className={classes.appContainer} disableGutters>
      <CssBaseline />

      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton onClick={() => setDrawerOpen(!drawerOpen)} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">GNOME-ish Todo</Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" classes={{ root: drawerOpen ? classes.drawerOpen : classes.drawerClose, paper: classes.drawerPaper }} open={drawerOpen} variant="persistent">
        <Toolbar />

        <NavigationMenu />
      </Drawer>

      <Box m={3} width="100%">
        <Toolbar />

        <Switch>
          <Route exact path={routes.overview}>
            <Overview />
          </Route>
          <Route path={routes.calendar}>
            <Calendar />
          </Route>
          <Route path={routes.label.path}>
            <Overview />
          </Route>
        </Switch>
      </Box>
    </Container>
  );
}

export default App;
