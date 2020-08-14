import React from "react";

import Router from "./routes";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./assets/global-styles/theme";
import { useStyles } from "./app-styles";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router className={classes.root} />
    </ThemeProvider>
  );
};

export default App;
