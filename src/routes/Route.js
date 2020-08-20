import React from "react";
import { Redirect, Route } from "react-router-dom";

export const isAuthenticated = () => {
  const token = localStorage.getItem("@App:JWT_TOKEN");
  return token ? true : false;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
