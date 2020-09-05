import React, { useState } from "react";
import {
  Dialog,
  ButtonBase,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@material-ui/core";
import Draggable from "react-draggable";

import { useStyles } from "./styles";

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(true); // false

  const { cancel, ok } = props;

  const handleClickOpen = (props) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      onClick={props.onClick}
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        {props.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{props.text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {cancel && (
          <ButtonBase
            autoFocus
            onClick={handleClose}
            color="primary"
            value={"cancel"}
            className={(classes.confirmBtn, classes.cancelBtn)}
          >
            {cancel}
          </ButtonBase>
        )}
        {ok && (
          <ButtonBase
            onClick={handleClose}
            color="primary"
            value={"ok"}
            className={classes.confirmBtn}
          >
            {ok}
          </ButtonBase>
        )}
      </DialogActions>
    </Dialog>
  );
}
