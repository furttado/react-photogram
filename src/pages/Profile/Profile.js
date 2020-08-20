import React, { useState, useEffect, useContext } from "react";

import { GlobalContext } from "../../hooks/GlobalState";
import { generateKey } from "../../services/generateKey";
import PostItem from "../../components/PostItem";

import { mockPost } from "../../services/mocks";
import { useStyles } from "./styles";

import { Typography, Avatar, Divider, Button } from "@material-ui/core";

const avatarImg = "https://i.pinimg.com/originals/e4/57/e9/e457e9abaabaf01aa957a9b7def01326.jpg";

const Profile = (props) => {
  const classes = useStyles();
  const { globalState, updateActiveRoute } = useContext(GlobalContext);
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.pathname !== globalState.activeRoute) {
      updateActiveRoute(window.location.pathname);
    }
  }, [globalState.activeRoute, updateActiveRoute]);

  function handleFollow() {
    setFollow(!follow);
  }

  return (
    <React.Fragment>
      <div className={classes.container}>
        {/* ============== avatar ==============*/}
        <section>
          <Avatar alt="profile avatar" src={avatarImg} className={classes.avatar} />
        </section>

        {/* ============== userName ==============*/}
        <section className={classes.userNameItem}>
          <Typography variant="subtitle1" className={classes.userNameTypography}>
            jessy_
          </Typography>
          <Button
            className={!follow ? classes.button : classes.unfollowButton}
            onClick={handleFollow}
          >
            {!follow ? "Follow" : "Unfollow"}
          </Button>
        </section>
        {/* ============== detailsContainer ==============*/}
        <section className={classes.detailsContainer}>
          <nav>
            <Typography variant="subtitle2">1300</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              posts
            </Typography>
          </nav>
          <nav>
            <Typography variant="subtitle2">5000</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              followers
            </Typography>
          </nav>
          <nav>
            <Typography variant="subtitle2">600</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              following
            </Typography>
          </nav>
        </section>

        {/*===================== Description ===================== */}
        <section direction="row" className={classes.descriptionContainer} md={4}>
          <main>
            <Typography variant="subtitle1">Jessy</Typography>
            <Typography variant="body2">
              💞 Photographer & youtuber <br /> 🌎 Google Local Guide <br />
              📸 @jessy
              <br />
              📺 tv.com/jessy
            </Typography>
          </main>
        </section>
      </div>
      {/* <Divider className={classes.divider} /> */}
      <hr className={classes.divider} />

      {mockPost.map((post) => {
        if (post.author === "authorId_2") {
          return (
            <PostItem
              key={generateKey()}
              id={post.postId}
              avatar={post.authorAvatar}
              nickname={post.nickname}
              place={post.place}
              picture={post.picture}
              description={post.description}
            />
          );
        }
      })}
    </React.Fragment>
  );
};

export default Profile;
