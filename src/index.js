import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import JssProvider from "react-jss/lib/JssProvider";

import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
  CssBaseline,
} from "@material-ui/core";

import { create } from "jss";

import theme from "./assets/global-styles/theme";
import store from "./store";
import App from "./App";

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = "jss-insertion-point";
//jss.options.createGenerateClassName = generateClassName;

ReactDOM.render(
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </JssProvider>
  </Provider>,
  document.getElementById("root")
);
