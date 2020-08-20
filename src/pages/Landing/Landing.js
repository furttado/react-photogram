import React, { useContext, useEffect } from "react";

import { GlobalContext } from "../../hooks/GlobalState";
import { generateKey } from "../../services/generateKey";

import { useStyles } from "./styles";
import { mockPost } from "../../services/mocks";

import Header from "../../components/Header";
import PostItem from "../../components/PostItem";

const Landing = (props) => {
  const classes = useStyles();
  const { globalState, updateActiveRoute } = useContext(GlobalContext);

  useEffect(() => {
    if (window.location.pathname !== globalState.activeRoute) {
      updateActiveRoute(window.location.pathname);
    }
  }, [globalState.activeRoute, updateActiveRoute]);

  return (
    <React.Fragment>
      <Header history={props.history} />
      <div className={classes.container}>
        {mockPost.map((post) => (
          <PostItem
            key={generateKey()}
            id={post.postId}
            avatar={post.authorAvatar}
            nickname={post.nickname}
            place={post.place}
            picture={post.picture}
            description={post.description}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Landing;
