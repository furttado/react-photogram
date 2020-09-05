import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import PrivateRouter from "./Route";

import Profile from "../pages/Profile";
import Register from "../pages/Register/Register";
import Landing from "../pages/Landing";
import NewPost from "../pages/NewPost";
import Login from "../pages/Login";
import Header from "../components/Header";

import { createBrowserHistory } from "history";
export const customHistory = createBrowserHistory();

function Routes(props) {
  const { isAuthenticated } = props;

  return (
    <Router history={customHistory}>
      <div className={props.container}>
        {isAuthenticated && <Header history={customHistory} />}
        <Switch>
          <PrivateRouter exact path="/" component={Landing} />
          <PrivateRouter path="/profile/:nickname" component={Profile} />
          <PrivateRouter path="/new-post" component={NewPost} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Routes);
