import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useStyles } from "../Register/styles";
import { GlobalContext } from "../../hooks/GlobalState";

import { Button, TextField } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import photoGramIcon from "../../assets/images/photogram-black.svg";

const Login = (props) => {
  const classes = useStyles();
  const { globalState, login } = useContext(GlobalContext);

  function handleLogin() {
    login();
    localStorage.setItem("@App:JWT_TOKEN", "userTokenjwt");
    props.history.push("/");
  }

  console.log("LOGIN PAGE: isLoggedIn => ", globalState.isLoggedIn);

  return (
    <div className={classes.wrapper}>
      <main className={classes.content}>
        <header className={classes.header}>
          <img src={photoGramIcon} alt="Photogram logo" />
        </header>

        <React.Fragment>
          <form className={classes.formLogin}>
            <TextField
              required
              variant="outlined"
              id="email"
              label="Email"
              type="email"
              className={classes.textField}
            />
            <TextField
              required
              variant="outlined"
              id="password"
              label="Password"
              type="password"
              className={classes.textField}
            />
            <Button
              variant="contained"
              elevation={0}
              className={classes.loginButton}
              onClick={handleLogin}
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
            startIcon={<ArrowBackIosIcon />}
          >
            Register
          </Button>
        </React.Fragment>
      </main>
    </div>
  );
};

export default Login;
