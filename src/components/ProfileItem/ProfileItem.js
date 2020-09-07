import React from "react";

import { useStyles } from "./styles";

import { Typography, Avatar, Button } from "@material-ui/core";

const ProfileItem = (props) => {
  const classes = useStyles();

  const {
    avatar,
    nickname,
    name,
    bio,
    qttyPosts,
    qttyFollowers,
    qttyFollowing,
    buttonStyle,
    buttonOnclick,
    buttonText,
  } = props;

  const handleButtonStyle = (stylePreset) => {
    return (
      (stylePreset === "blue" && classes.button) ||
      (stylePreset === "red" && classes.unfollowButton)
    );
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <section>
          <Avatar alt="profile avatar" src={avatar} className={classes.avatar} />
        </section>

        <section className={classes.userNameItem}>
          <Typography variant="h2">{nickname}</Typography>
          <Button className={handleButtonStyle(buttonStyle)} onClick={buttonOnclick}>
            {buttonText}
          </Button>
        </section>

        <section className={classes.detailsContainer}>
          <nav>
            <Typography variant="subtitle2">{qttyPosts}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              posts
            </Typography>
          </nav>
          <nav>
            <Typography variant="subtitle2">{qttyFollowers}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              followers
            </Typography>
          </nav>
          <nav>
            <Typography variant="subtitle2">{qttyFollowing}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              following
            </Typography>
          </nav>
        </section>

        <section direction="row" className={classes.descriptionContainer} md={4}>
          <main>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="body2">{bio}</Typography>
          </main>
        </section>
      </div>
      <hr className={classes.divider} />
    </React.Fragment>
  );
};

export default ProfileItem;
