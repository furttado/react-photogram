import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { RouteContext } from "../../context/routeContext";
import { useStyles } from "./styles";
import { updateRoute } from "../../services/updateRoute";

import { Button, Typography, TextField } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import photoGramIcon from "../../assets/images/photogram-black.svg";

const Register = () => {
  const classes = useStyles();
  const [routeValue, setRouteValue] = useContext(RouteContext);

  function handleChangeRoute(value) {
    setRouteValue(value);
  }

  useEffect(() => {
    updateRoute(routeValue, setRouteValue);
  }, [routeValue]);

  return (
    <div className={classes.wrapper}>
      <main className={classes.content}>
        <header className={classes.header}>
          <img src={photoGramIcon} alt="Photogram logo" />
        </header>
        {(routeValue === 0 && (
          <React.Fragment>
            <form className={classes.formRegister} noValidate autoComplete="off" style={{}}>
              <TextField
                required
                variant="outlined"
                id=""
                label="Email"
                type="email"
                className={classes.textField}
              />
              <TextField
                required
                variant="outlined"
                id=""
                label="Password"
                type="password"
                className={classes.textField}
              />
              <TextField
                required
                variant="outlined"
                id=""
                label="Repeat password"
                type="password"
              />
              <TextField
                required
                variant="outlined"
                id=""
                label="Nickname"
                type="text"
                className={classes.textField}
              />
              <TextField
                required
                variant="outlined"
                id=""
                label="Name"
                type="text"
                className={classes.textField}
              />
              <TextField
                required
                variant="outlined"
                id=""
                label="Avatar url"
                type="url"
                className={classes.textField}
              />
              <Button variant="contained" elevation={0} className={classes.registerButton}>
                Register{" "}
              </Button>
            </form>
            <Typography variant={"body2"} align="center" color="textSecondary">
              or if you already have an account:
            </Typography>{" "}
            <Button
              component={Link}
              to="/login"
              variant="contained"
              elevation={0}
              className={classes.loginButton}
              onClick={() => handleChangeRoute(1)}
            >
              Login
            </Button>
          </React.Fragment>
        )) || (
          <React.Fragment>
            <form className={classes.formLogin}>
              <TextField
                required
                variant="outlined"
                id=""
                label="Email"
                type="email"
                className={classes.textField}
              />
              <TextField
                required
                variant="outlined"
                id=""
                label="Password"
                type="password"
                className={classes.textField}
              />
              <Button
                variant="contained"
                elevation={0}
                className={classes.loginButton}
                onClick={() => handleChangeRoute(2)}
                component={Link}
                to="/"
              >
                Login
              </Button>
            </form>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              elevation={0}
              className={classes.registerButton}
              onClick={() => handleChangeRoute(0)}
              startIcon={<ArrowBackIosIcon />}
            >
              Register
            </Button>
          </React.Fragment>
        )}
      </main>
    </div>
  );
};

export default Register;
