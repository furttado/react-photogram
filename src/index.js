import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./assets/global-styles/theme";
import { CssBaseline } from "@material-ui/core";

import { GlobalProvider } from "./hooks/GlobalState";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
