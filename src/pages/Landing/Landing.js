import React, { useState, useContext, useEffect } from "react";
import PostItem from "../../components/PostItem";

import { useStyles } from "./styles";
import { generateKey } from "../../services/generateKey";
import { mockPost } from "../../services/mocks";

const Landing = (props) => {
  const classes = useStyles();
  return (
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
  );
};

export default Landing;
