import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { setActiveRoute } from "../../store/ducks/styles/activeRoute";
import { fetchAddPost } from "../../store/ducks/posts/addPost/actions";
import { setDefault as setDefaultPostStatus } from "../../store/ducks/posts/addPost/actions";

import { useStyles } from "./styles";
import PostItem from "../../components/PostItem";

import { Button, TextField, Select, CircularProgress } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

const NewPost = (props) => {
  const classes = useStyles();

  const initialFormData = { location: "", picture: "", description: "", role: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [preview, setPreview] = useState(false);
  const [progress, setProgress] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const {
    activeRoute,
    setActiveRoute,
    mainProfile,
    fetchAddPost,
    addPostStatus,
    setDefaultPostStatus,
  } = props;

  useEffect(() => {
    if (window.location.pathname !== activeRoute) {
      setActiveRoute(window.location.pathname);
    }

    if (addPostStatus.loading) {
      setProgress(true);
    }

    if (addPostStatus.success) {
      setDefaultPostStatus();
      handleGoBack();
    }

    if (formData.location && formData.picture && formData.description) {
      setDisableButton(false);
    }
    if (!formData.location || !formData.picture || !formData.description) {
      setDisableButton(true);
    }
  }, [activeRoute, addPostStatus, formData]);

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

  async function handleSubmit(event) {
    event.preventDefault();
    fetchAddPost(formData);
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
          className={`${classes.postButton} ${classes.TextField}`}
          onClick={handleSubmit}
          disabled={disableButton} //progress
        >
          {!progress ? "Post" : <CircularProgress className={classes.progress} />}
        </Button>
      </form>
    </React.Fragment>
  );

  const postPreview = (
    <PostItem
      id={"post.postId"}
      avatar={mainProfile.data.picture}
      nickname={mainProfile.data.nickname}
      place={formData.location}
      picture={formData.picture}
      description={formData.description}
    />
  );

  return (
    <React.Fragment>
      <div className={classes.container}>
        <nav className={classes.buttonsContainer}>
          <Button variant={"contained"} className={classes.goBackButton} onClick={handleGoBack}>
            <ArrowBackIos /> Back
          </Button>
          <Button
            variant={"contained"}
            className={classes.goBackButton}
            onClick={handlePreview}
            disabled={disableButton}
          >
            {(!preview && "Preview") || "Edit"}
          </Button>
        </nav>
        {(!preview && form) || postPreview}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeRoute: state.activeRoute.route,
  mainProfile: state.mainProfile,
  addPostStatus: state.addPostStatus,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveRoute: (route) => dispatch(setActiveRoute(route)),
    fetchAddPost: (post) => dispatch(fetchAddPost(post)),
    setDefaultPostStatus: () => dispatch(setDefaultPostStatus()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
