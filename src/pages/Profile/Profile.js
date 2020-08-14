import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import PostItem from "../../components/PostItem";

import { useStyles } from "./styles";
import { generateKey } from "../../services/generateKey";
import { mockPost } from "../../services/mocks";

const avatarImg = "https://i.pinimg.com/originals/e4/57/e9/e457e9abaabaf01aa957a9b7def01326.jpg";

const Profile = () => {
  const classes = useStyles();
  const [follow, setFollow] = useState(false);

  function handleFollow() {
    setFollow(!follow);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          {(follow === false && (
            <Button className={classes.button} onClick={handleFollow}>
              Follow
            </Button>
          )) || (
            <Button className={classes.unfollowButton} onClick={handleFollow}>
              Unfollow
            </Button>
          )}
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
              💞 Fotógrafa & youtuber <br /> 🌎 Google Local Guide <br />
              📸 @jessy
              <br />
              📺 tv.com/jessy
            </Typography>
          </main>
        </section>
      </div>
      <Divider />
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
