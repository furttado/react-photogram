import React, { useContext } from "react";
import { Router, Route, Switch } from "react-router-dom";

import PrivateRouter from "./Route";

import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Landing from "../pages/Landing";
import NewPost from "../pages/NewPost";
import Login from "../pages/Login";
import Header from "../components/Header";

import { GlobalContext } from "../hooks/GlobalState";

import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

function Routes(props) {
  const { globalState } = useContext(GlobalContext);

  return (
    <Router history={customHistory}>
      <div className={props.container}>
        {globalState.isLoggedIn && <Header history={customHistory} />}
        <Switch>
          <PrivateRouter exact path="/" component={Landing} />
          <PrivateRouter path="/profile" component={Profile} />
          <PrivateRouter path="/new-post" component={NewPost} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
