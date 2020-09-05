import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { useStyles } from "../Register/styles";
import Dialog from "../../components/Dialog";

import { Button, TextField, CircularProgress } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import photoGramIcon from "../../assets/images/photogram-black.svg";

import { fetchLogin } from "../../store/ducks/auth";

const Login = (props) => {
  const classes = useStyles();
  const initialFormData = { email: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [progress, setProgress] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const { errorLogin, loading } = props;

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }

  useEffect(() => {
    setProgress(loading);
    if (errorLogin) {
      if (
        errorLogin.message.indexOf("password") !== -1 ||
        errorLogin.message.indexOf("not found") !== -1
      )
        setLoginError("Email or password not valid, please check your credentials.");
    }
    if (loginError) {
      setOpenDialog(true);
    }
  }, [loading, loginError, errorLogin]);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setLoginError(false);
  };

  function handleLogin(event) {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      return setLoginError("Please, fill email and password to go on.");
    }
    props.fetchLogin(formData);
  }

  return (
    <div className={classes.wrapper}>
      {openDialog && (
        <Dialog
          handleClickOpen={openDialog}
          ok={"Ok"}
          title={"Warning"}
          text={loginError}
          onClick={handleCloseDialog}
        />
      )}
      <main className={classes.content}>
        <header className={classes.header}>
          <img src={photoGramIcon} alt="Photogram logo" />
        </header>

        <React.Fragment>
          <form className={classes.formLogin}>
            <TextField
              required
              variant="outlined"
              label="Email"
              type="email"
              className={classes.textField}
              id={"email"}
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              required
              variant="outlined"
              label="Password"
              type="password"
              className={classes.textField}
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              elevation={0}
              className={classes.loginButton}
              onClick={handleLogin}
              disabled={progress}
            >
              {!progress ? "Login" : <CircularProgress className={classes.progress} />}
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

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  errorLogin: state.auth.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (user) => dispatch(fetchLogin(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
