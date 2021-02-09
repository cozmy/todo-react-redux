import DateFnsUtils from "@date-io/date-fns";
import {ThemeProvider} from "@material-ui/core";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import "fontsource-roboto";
import React from "react";
import ReactDOM from "react-dom";
import {Provider as StoreProvider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import {theme} from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <App/>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
