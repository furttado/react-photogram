import React from "react";
import ReactDOM from "react-dom";

import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
  CssBaseline,
} from "@material-ui/core";

import theme from "./assets/global-styles/theme";

import store from "./store";
import { Provider } from "react-redux";

import App from "./App";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});
//jss.options.createGenerateClassName = generateClassName;
jss.options.createGenerateClassName = createGenerateClassName;

console.log(jss);
console.log(generateClassName);

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
