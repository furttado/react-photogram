import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { setActiveRoute } from "../../store/ducks/styles/activeRoute";
import { fetchFriendProfile } from "../../store/ducks/friendProfile/actions";
import { fetchFollow, fetchUnfollow, fetchEditUserProfile } from "../../store/ducks/user/actions";

import ProfileItem from "../../components/ProfileItem";
import PostItem from "../../components/PostItem";
import ProfileSettings from "../../components/ProfileSettings";
import Warning from "../../components/Warning";

import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./styles";

const Profile = (props) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(props.handleOpen);
  const { nickname } = useParams();

  const {
    setActiveRoute,
    mainProfile,
    fetchFriendProfile,
    friendProfile,
    fetchFollow,
    fetchUnfollow,
    fetchEditUserProfile,
    userStatus,
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveRoute(`/profile`);
    if (nickname !== mainProfile.data.nickname) {
      fetchFriendProfile(nickname);
    }
  }, [nickname]);

  const handleFollow = async () => {
    if (friendProfile.data.isFollowing || friendProfile.data.isRequested === true) {
      fetchUnfollow(friendProfile.data.user.nickname);
    } else {
      fetchFollow(friendProfile.data.user.nickname);
    }
  };

  const handleOpenEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = () => {
    setEdit(false);
  };

  const MainProfile = () => {
    return (
      <React.Fragment>
        <ProfileItem
          avatar={mainProfile.data.picture}
          nickname={mainProfile.data.nickname}
          name={mainProfile.data.name}
          bio={mainProfile.data.bio}
          qttyPosts={(mainProfile.data.posts && mainProfile.data.posts.length) || 0}
          qttyFollowers={0}
          qttyFollowing={0}
          buttonStyle={"blue"}
          buttonOnclick={handleOpenEdit}
          buttonText={"Edit"}
        />
        {mainProfile.loading ? (
          <CircularProgress className={classes.progress} />
        ) : mainProfile.data.posts.length === 0 ? (
          <Warning text={"Nothing here yet"} image={"no-post"} />
        ) : (
          mainProfile.data.posts.map((post) => (
            <PostItem
              key={post.postId}
              avatar={mainProfile.data.picture}
              nickname={post.authorNickname}
              id={post.postId}
              place={post.title}
              picture={post.picture}
              description={post.description}
            />
          ))
        )}
      </React.Fragment>
    );
  };

  const FriendProfile = () => {
    return (
      <React.Fragment>
        {!friendProfile.data.user ? (
          <CircularProgress className={classes.progress} />
        ) : (
          <>
            {/**PROFILE */}
            <ProfileItem
              avatar={friendProfile.data.user.picture}
              nickname={friendProfile.data.user.nickname}
              name={friendProfile.data.user.name}
              bio={friendProfile.data.user.bio}
              qttyPosts={
                (friendProfile.data.user.posts && friendProfile.data.user.posts.length) || 0
              }
              qttyFollowers={0}
              qttyFollowing={0}
              buttonStyle={
                ((friendProfile.data.isFollowing || friendProfile.data.isRequested === true) &&
                  "red") ||
                "blue"
              }
              buttonOnclick={() => handleFollow()}
              buttonText={
                ((friendProfile.data.isFollowing || friendProfile.data.isRequested === true) &&
                  "Unfollow") ||
                "Follow"
              }
            />
            {/**POSTS */}
            {friendProfile.data.isFollowing ? (
              friendProfile.data.user.posts.length > 0 ? (
                friendProfile.data.user.posts.map((post) => (
                  <PostItem
                    key={post.postId}
                    avatar={friendProfile.data.user.picture}
                    nickname={post.authorNickname}
                    id={post.postId}
                    place={post.title}
                    picture={post.picture}
                    description={post.description}
                  />
                ))
              ) : (
                <Warning text={"Nothing here yet"} image={"no-post"} />
              )
            ) : friendProfile.data.isRequested ? (
              <Warning text={"Awaiting for approval"} image={"wait"} />
            ) : (
              <Warning text={"Private account"} image={"private"} />
            )}
          </>
        )}
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      {nickname === mainProfile.data.nickname ? (
        <>
          {edit && (
            <ProfileSettings
              name={mainProfile.data.name}
              avatar={mainProfile.data.picture}
              bio={mainProfile.data.bio}
              open={edit}
              handleClose={handleCloseEdit}
              handleDispatchUpdate={fetchEditUserProfile}
              updateStatus={userStatus}
            />
          )}
          <MainProfile />
        </>
      ) : friendProfile.error ? (
        <Warning text={"User not found"} image={"not-found"} />
      ) : (
        <FriendProfile />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  mainProfile: state.mainProfile,
  friendProfile: state.friendProfile,
  userStatus: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveRoute: (route) => dispatch(setActiveRoute(route)),
    fetchFriendProfile: (user) => dispatch(fetchFriendProfile(user)),
    fetchFollow: (user) => dispatch(fetchFollow(user)),
    fetchUnfollow: (user) => dispatch(fetchUnfollow(user)),
    fetchEditUserProfile: (data) => dispatch(fetchEditUserProfile(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
