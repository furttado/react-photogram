import React, { useState, useContext } from "react";

import { useStyles } from "./styles";
import history from "../../routes/history";
import { RouteContext } from "../../context/routeContext";

import { Button, TextField, Select } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

const NewPost = () => {
  const classes = useStyles();
  const [routeValue, setRouteValue] = useContext(RouteContext);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleGoBack() {
    setRouteValue(history.goBack);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleGoBack();
    console.log("Post done!");
  }

  return (
    <div className={classes.container}>
      <Button variant={"contained"} className={classes.goBackButton} onClick={handleGoBack}>
        <ArrowBackIos /> Back
      </Button>
      {/* <main className={classes.mainContainer}> */}
      <form className={classes.form}>
        <TextField
          required
          value={""}
          variant="outlined"
          id=""
          label="Location"
          type="text"
          className={classes.textField}
        />
        <TextField
          required
          value={""}
          variant="outlined"
          id=""
          label="Picture url"
          type="text"
          className={classes.textField}
        />
        <TextField
          required
          value={""}
          variant="outlined"
          id=""
          label="Description"
          type="text"
          multiline
          className={classes.textField}
        />
        <Select
          native
          value={inputValue}
          onChange={handleChange}
          variant="outlined"
          className={classes.textField}
        >
          <option value="" disabled>
            privacy setting
          </option>
          <option value={"PUBLIC"}>public</option>
          <option value={"PRIVATE"}>private</option>
          <option value={"FRIENDSONLY"}>friends only</option>
        </Select>
        <Button
          variant={"contained"}
          className={[classes.postButton, classes.TextField]}
          onClick={handleSubmit}
        >
          Post
        </Button>
      </form>
      {/* </main> */}
    </div>
  );
};

export default NewPost;
