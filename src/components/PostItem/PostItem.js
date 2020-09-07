import React, { useState } from "react";

import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  CardActions,
} from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";

const PostItem = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }

  return (
    <Card elevation={0} className={classes.card} id={props.id}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar
            alt="profile avatar"
            src={props.avatar}
            //className={classes.postAvatar}
            //style={{ width: theme.spacing(10), height: theme.spacing(10) }}
          />
        }
        title={props.nickname}
        subheader={props.place}
        component={props.component}
        to={`/profile/${props.to}`}
        style={{ textDecoration: "none", color: "inherit" }}
        //onClick={props.onClick}
      />
      <CardMedia title={props.place} image={props.picture} className={classes.media} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="like post"
          onClick={handleLike}
          className={(like === true && classes.likeButton) || classes.defaultLikeButton}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostItem;
