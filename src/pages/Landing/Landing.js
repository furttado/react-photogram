import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { useStyles } from "./styles";
import { CircularProgress, Button } from "@material-ui/core";
import { ExpandMore, ExpandLess, LastPage } from "@material-ui/icons";

import PostItem from "../../components/PostItem";
import { setActiveRoute } from "../../store/ducks/styles/activeRoute";
import { fetchAllPosts } from "../../store/ducks/posts/allPosts/actions";

const Landing = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const { activeRoute, setActiveRoute, fetchAllPosts, allPosts } = props;

  useEffect(() => {
    if (window.location.pathname !== activeRoute) {
      setActiveRoute(window.location.pathname);
    }
    if (allPosts.data.length === 0) {
      fetchAllPosts(page);
    }
  }, [page, fetchAllPosts]);

  const getNewPages = () => {
    let lastPageLength;
    for (lastPageLength of allPosts.data) {
      lastPageLength = lastPageLength.length;
    }
    if (lastPageLength < 5) {
      return;
    }

    let activePage = page;
    setPage((activePage += 1));

    if (allPosts && allPosts.data.length === page) {
      fetchAllPosts(activePage);
    }
    window.scrollTo(0, 0);
  };

  const getOldPages = () => {
    let activePage = page;
    if (page > 1) {
      setPage((activePage -= 1));
    }
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        {page > 1 && (
          <Button onClick={getOldPages} className={classes.getOldPagesButton}>
            <ExpandLess />
          </Button>
        )}

        {allPosts.data.length < page ? ( // allPosts.data.length < page ? // allPosts.loading ?
          <CircularProgress className={classes.progress} />
        ) : (
          allPosts.data[page - 1].map((post) => (
            <PostItem
              key={post.postId}
              id={post.postId}
              avatar={post.author.picture}
              nickname={post.author.nickname}
              place={post.title}
              picture={post.picture}
              description={post.description}
              component={Link}
              to={post.author.nickname}
            />
          ))
        )}
        {allPosts.data.length >= page && (
          <Button onClick={getNewPages} className={classes.getNewPagesButton}>
            <ExpandMore />
          </Button>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeRoute: state.activeRoute.route,
  allPosts: state.allPosts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveRoute: (route) => dispatch(setActiveRoute(route)),
    fetchAllPosts: (page) => dispatch(fetchAllPosts(page)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
