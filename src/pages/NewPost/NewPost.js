import React, { useState, useContext } from "react";
//import PropTypes from "prop-types";
//import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import history from "../../routes/history";
import { RouteContext } from "../../hooks/routeContext";

import { Button, TextField, Select } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import PostItem from "../../components/PostItem";

const NewPost = () => {
  const classes = useStyles();
  const [routeValue, setRouteValue] = useContext(RouteContext);
  const initialFormData = { location: "", picture: "", description: "", role: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [preview, setPreview] = useState(false);

  function handleGoBack() {
    if (preview) {
      return handlePreview();
    }
    setRouteValue(history.goBack);
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

  function handlePreview() {
    setPreview(!preview);
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
  );
};

//NewPost.propTypes = {
//  classes: PropTypes.object.isRequired,
//};

//export default withStyles(useStyles)(NewPost);
export default NewPost;
