import React from "react";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";
import { Button, Typography, TextField } from "@material-ui/core";
import photoGramIcon from "../../assets/images/photogram-black.svg";

const Register = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <main className={classes.content}>
        <header className={classes.header}>
          <img src={photoGramIcon} alt="Photogram logo" />
        </header>
        <form className={classes.formRegister} noValidate autoComplete="off" style={{}}>
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
          <TextField
            required
            variant="outlined"
            id="repeat-password"
            label="Repeat password"
            type="password"
          />
          <TextField
            required
            variant="outlined"
            id="nickname"
            label="Nickname"
            type="text"
            className={classes.textField}
          />
          <TextField
            required
            variant="outlined"
            id="name"
            label="Name"
            type="text"
            className={classes.textField}
          />
          <TextField
            required
            variant="outlined"
            id="avatar"
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
        >
          Login
        </Button>
      </main>
    </div>
  );
};

export default Register;
