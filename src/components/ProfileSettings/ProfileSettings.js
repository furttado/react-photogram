import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import Modal from "@material-ui/core/Modal";

import { Typography, Button, IconButton, TextField, ButtonBase } from "@material-ui/core";
import { HighlightOff, Close } from "@material-ui/icons";

import Dialog from "../Dialog";

const ProfileSettings = (props) => {
  const classes = useStyles();
  const [disabledButton, setDisabledButton] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const initialFormData = {
    fullname: props.name,
    avatar: props.avatar,
    bio: props.bio,
  };
  const [formData, setFormData] = useState(initialFormData);

  const { open, handleClose, handleDispatchUpdate, updateStatus } = props;

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleClear = (id) => {
    setFormData({ ...formData, [id]: "" });
  };

  const handleCloseDialog = (e) => {
    if (e.target.value === "ok") {
      handleClose();
    } else {
      setOpenDialog(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialFormData === formData) {
      handleClose();
    } else {
      handleDispatchUpdate(formData);
    }
  };

  useEffect(() => {
    if (!formData.fullname || !formData.avatar || !formData.bio) {
      setDisabledButton(true);
    }
    if (formData.fullname.length > 1 && formData.avatar.length > 10 && formData.bio.length > 5) {
      setDisabledButton(false);
    }
    if (updateStatus.data.message) {
      handleClose();
    }
  }, [formData, updateStatus, handleClose]);

  const body = (
    <div className={classes.paper}>
      <section className={classes.header}>
        <Typography variant={"h4"} id="simple-modal-title">
          Profile settings
        </Typography>
        <IconButton
          variant="outlined"
          color="primary"
          onClick={() => setOpenDialog(true)}
          className={classes.iconButton}
        >
          <Close />
        </IconButton>
        {openDialog && (
          <Dialog
            cancel={"Cancel"}
            ok={"Yes"}
            text={"Any changes will be lost. Are you sure you want to leave?"}
            title={"Warning"}
            onClick={(e) => handleCloseDialog(e)}
          />
        )}
      </section>
      <Typography variant={"subtitle1"} id="simple-modal-description" className={classes.subtitle}>
        Update your data as you want{" "}
        <span role="img" aria-label="funny emoji">
          🙃
        </span>
      </Typography>
      <form className={classes.form}>
        <section className={classes.formRow}>
          <TextField
            required
            variant="outlined"
            label="Name"
            type="text"
            className={classes.textField}
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
          <ButtonBase onClick={() => handleClear("fullname")} className={classes.deleteButton}>
            {" "}
            <HighlightOff aria-label={"clear"} />
          </ButtonBase>
        </section>
        <section className={classes.formRow}>
          <TextField
            required
            variant="outlined"
            label="Avatar url"
            type="text"
            className={classes.textField}
            id="avatar"
            value={formData.avatar}
            onChange={handleChange}
          />
          <ButtonBase onClick={() => handleClear("avatar")} className={classes.deleteButton}>
            {" "}
            <HighlightOff aria-label={"clear"} />
          </ButtonBase>
        </section>
        <section className={classes.formRow}>
          <TextField
            required
            variant="outlined"
            multiline={true}
            rowsMax={10}
            inputProps={{
              maxLength: 295,
            }}
            label={`Bio - characters: ${295 - formData.bio.length}`}
            type="text"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
          />
          <ButtonBase onClick={() => handleClear("bio")} className={classes.deleteButton}>
            {" "}
            <HighlightOff aria-label={"clear"} />
          </ButtonBase>
        </section>
        <Button
          onClick={handleSubmit}
          className={classes.updateButton}
          disabled={disabledButton}
          classes={{ disabled: classes.buttonDisabled }}
        >
          Update
        </Button>
      </form>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-profile"
      aria-describedby="allow-to-edit-profile"
      disableBackdropClick={true}
    >
      {body}
    </Modal>
  );
};

export default ProfileSettings;
