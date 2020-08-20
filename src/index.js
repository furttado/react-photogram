import React from "react";
import ReactDOM from "react-dom";

import { GlobalProvider } from "./hooks/GlobalState";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  rootElement
);
