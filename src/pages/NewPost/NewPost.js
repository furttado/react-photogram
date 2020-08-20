import React, { useState, useContext, useEffect } from "react";

import { GlobalContext } from "../../hooks/GlobalState";
import { useStyles } from "./styles";

import PostItem from "../../components/PostItem";
import Header from "../../components/Header";

import { Button, TextField, Select } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

const NewPost = (props) => {
  const classes = useStyles();
  const { globalState, updateActiveRoute } = useContext(GlobalContext);

  const initialFormData = { location: "", picture: "", description: "", role: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== globalState.activeRoute) {
      updateActiveRoute(window.location.pathname);
    }
  }, [globalState.activeRoute, updateActiveRoute]);

  function handlePreview() {
    setPreview(!preview);
  }

  function handleGoBack() {
    if (preview) {
      return handlePreview();
    }
    props.history.goBack();
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("formData", formData);
    console.log("Post done!");
    handleGoBack();
  }

  const form = (
    <React.Fragment>
      <form className={classes.form}>
        <TextField
          required
          variant="outlined"
          label="Location"
          type="text"
          className={classes.textField}
          id="location"
          value={formData.location}
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="Picture url"
          type="text"
          className={classes.textField}
          id="picture"
          value={formData.picture}
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          label="Description"
          type="text"
          multiline
          className={classes.textField}
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Select
          native
          variant="outlined"
          className={classes.textField}
          id="role"
          value={formData.role}
          onChange={handleChange}
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
          className={(classes.postButton, classes.TextField)}
          onClick={handleSubmit}
        >
          Post
        </Button>
      </form>
    </React.Fragment>
  );

  const postPreview = (
    <PostItem
      id={"post.postId"}
      avatar={"https://picsum.photos/200/300"}
      nickname={"Your NickName"}
      place={formData.location}
      picture={formData.picture}
      description={formData.description}
    />
  );

  return (
    <React.Fragment>
      <Header history={props.history} />
      <div className={classes.container}>
        <nav className={classes.buttonsContainer}>
          <Button variant={"contained"} className={classes.goBackButton} onClick={handleGoBack}>
            <ArrowBackIos /> Back
          </Button>
          <Button variant={"contained"} className={classes.goBackButton} onClick={handlePreview}>
            {(!preview && "Preview") || "Edit"}
          </Button>
        </nav>
        {(!preview && form) || postPreview}
      </div>
    </React.Fragment>
  );
};

export default NewPost;
