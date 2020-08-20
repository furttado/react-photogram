import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import PrivateRouter from "./Route";

import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Landing from "../pages/Landing";
import NewPost from "../pages/NewPost";
import Login from "../pages/Login";

import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

function Routes(props) {
  return (
    <Router history={customHistory}>
      <main className={props.className}>
        <Switch>
          <PrivateRouter exact path="/" component={Landing} />
          <PrivateRouter path="/profile" component={Profile} />
          <PrivateRouter path="/new-post" component={NewPost} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    </Router>
  );
}

export default Routes;
