import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { RouteProvider } from "../context/routeContext";

import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Landing from "../pages/Landing";
import NewPost from "../pages/NewPost";
import Header from "../components/Header";

function Router(props) {
  return (
    <BrowserRouter>
      <RouteProvider>
        <Header />
        <main className={props.className}>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Register} />
            <Route exact path="/" component={Landing} />
            <Route path="/profile" component={Profile} />
            <Route path="/new-post" component={NewPost} />
          </Switch>
        </main>
      </RouteProvider>
    </BrowserRouter>
  );
}

export default Router;
