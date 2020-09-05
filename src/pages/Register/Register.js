import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";
import { Button, Typography, TextField, CircularProgress } from "@material-ui/core";
import photoGramIcon from "../../assets/images/photogram-black.svg";
import api from "../../services/api";

const Register = (props) => {
  const classes = useStyles();
  const initialFormData = {
    email: "",
    password: "",
    passwordRepeat: "",
    nickname: "",
    fullname: "",
    avatar: "",
    bio: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [progress, setProgress] = useState(false)

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.email) {
      alert("You need to provide an email");
      return;
    }
    if (!formData.password) {
      alert("You need to provide a password");
      return;
    }
    if (!formData.passwordRepeat) {
      alert("You need to repeat your password");
      return;
    }
    if (formData.password !== formData.passwordRepeat) {
      alert("Your password don't match");
      return;
    }
    if (!formData.nickname) {
      alert("You need to provide a nickname");
      return;
    }
    if (!formData.fullname) {
      alert("You need to provide a name");
      return;
    }
    if (!formData.avatar) {
      alert("You need to provide a url image");
      return;
    }
    if (!formData.bio) {
      alert("You need to provide a litle biography of you");
      return;
    }

    try {
      setProgress(true)
      const body = {
        email: formData.email,
        password: formData.password,
        nickname: formData.nickname,
        name: formData.fullname,
        picture: formData.avatar,
        bio: formData.bio
      };
      const response = await api.post(`users/register`, body);
      if (response.request.status === 201) {
        props.history.push("/login");
      }
    } catch (err) {
      setProgress(false)
      console.log(err);
    }
  };

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
            label="Email"
            type="email"
            className={classes.textField}
            id="email"
            value={FormData.email}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            label="Password"
            type="password"
            className={classes.textField}
            id="password"
            value={FormData.password}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            label="Repeat password"
            type="password"
            id="passwordRepeat"
            value={FormData.passwordRepeat}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            label="Nickname"
            type="text"
            className={classes.textField}
            id="nickname"
            value={FormData.nickname}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            label="Name"
            type="text"
            className={classes.textField}
            id="fullname"
            value={FormData.fullname}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            label="Avatar url"
            type="text"
            className={classes.textField}
            id="avatar"
            value={FormData.avatar}
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            multiline={true}
            inputProps={{
              maxLength: 295,
            }}
            label={`Bio - characters: ${295 - formData.bio.length}`}
            type="text"
            className={classes.textField}
            id="bio"
            value={FormData.bio}
            onChange={handleChange}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            elevation={0}
            className={classes.registerButton}
            disabled={progress}
          >
            {!progress ? 'Register' : <CircularProgress className={classes.progress} />}
          </Button>
        </form>
        <Typography
          variant={"body2"}
          align="center"
          color="textSecondary"
        >
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
