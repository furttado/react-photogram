import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { RouteContext } from "../../hooks/routeContext";
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

import { useStyles } from "./styles";

const PostItem = (props) => {
  const classes = useStyles();
  const [like, setLike] = useState(false);
  const [routeValue, setRouteValue] = useContext(RouteContext);

  const handleChangeRoute = (value) => {
    setRouteValue(value);
  };

  function handleLike() {
    setLike(!like);
  }

  return (
    <Card elevation={0} className={classes.card} id={props.id}>
      <CardHeader
        avatar={<Avatar alt="profile avatar" src={props.avatar} className={classes.avatar} />}
        title={props.nickname}
        subheader={props.place}
        component={Link}
        to={"/profile"}
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => handleChangeRoute(3)}
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
