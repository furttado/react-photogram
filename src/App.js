import React from "react";

import Routes from "./routes";
import { useStyles } from "./app-styles";

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.main}>
        <Routes container={classes.container} />
      </main>
    </React.Fragment>
  );
};

export default App;
