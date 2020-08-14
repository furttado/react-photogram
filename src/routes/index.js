import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { RouteProvider } from "../context/routeContext";

function Router(props) {
  return (
    <BrowserRouter>
      <RouteProvider>
        <Header />
        <main className={props.className}>
          <Switch>
            <Route exact path="/" component={<div>Component</div>} />
            <Route path="/page1" component={<div>Component</div>} />
            <Route path="/page2" component={<div>Component</div>} />
            <Route path="/page3" component={<div>Component</div>} />
            <Route path="/page4" component={<div>Component</div>} />
          </Switch>
        </main>
      </RouteProvider>
    </BrowserRouter>
  );
}

export default Router;
