import React from "react";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import { SentimentVeryDissatisfied, Lock, Panorama, AccessAlarm } from "@material-ui/icons";

const Warning = (props) => {
  const classes = useStyles();

  const { text, image } = props;

  const handleSelectImage = (value) => {
    if (value === "not-found") {
      return <SentimentVeryDissatisfied className={classes.icon} />;
    }
    if (value === "private") {
      return <Lock className={classes.icon} />;
    }
    if (value === "no-post") {
      return <Panorama className={classes.icon} />;
    }
    if (value === "wait") {
      return <AccessAlarm className={classes.icon} />;
    }
  };

  return (
    <section className={classes.container}>
      <div className={classes.imageConstainer}>{handleSelectImage(image)}</div>
      <Typography className={classes.text}>{text}</Typography>
    </section>
  );
};

export default Warning;
