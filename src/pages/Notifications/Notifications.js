import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import generateKey from "../../services/generateKey";

import { setActiveRoute } from "../../store/ducks/styles/activeRoute";
import {
  fetchNotifications,
  fetchRejectFollower,
  fetchApproveFollower,
} from "../../store/ducks/user/actions";
import { CheckCircle, Cancel } from "@material-ui/icons";

import Warning from "../../components/Warning";

import {
  CircularProgress,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  ButtonBase,
} from "@material-ui/core";
import { useStyles } from "./styles";

const Notifications = (props) => {
  const [notification, setNotification] = useState([]);
  const classes = useStyles();
  const {
    setActiveRoute,
    activeRoute,
    followNotifications,
    fetchNotifications,
    fetchRejectFollower,
    fetchApproveFollower,
    userStatus,
  } = props;

  useEffect(() => {
    if (window.location.pathname !== activeRoute) {
      setActiveRoute(window.location.pathname);
    }
    fetchNotifications();
  }, [fetchNotifications]);

  const handleApproveFollower = (user) => {
    fetchApproveFollower(user);
  };
  const handleRejectFollower = (user) => {
    fetchRejectFollower(user);
  };

  const NotificationItem = ({ user }) => {
    return (
      <React.Fragment>
        <List className={classes.root}>
          <ListItem alignItems="flex-start" className={classes.listItem}>
            <ListItemAvatar>
              <Avatar
                alt={user.name}
                src={user.picture}
                style={{ width: "40px", height: "40px" }}
                component={Link}
                to={`/profile/${user.nickname}`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    component={Link}
                    to={`/profile/${user.nickname}`}
                    style={{ textDecoration: "none" }}
                  >
                    @{user.nickname}
                  </Typography>
                  {" wants to follow you"}
                </React.Fragment>
              }
            />
            <nav className={classes.buttonsContainer}>
              <ButtonBase
                className={classes.acceptButton}
                onClick={() => handleApproveFollower(user.nickname)}
              >
                <CheckCircle />
              </ButtonBase>
              <ButtonBase
                className={classes.denyButton}
                onClick={() => handleRejectFollower(user.nickname)}
              >
                <Cancel />
              </ButtonBase>
            </nav>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {userStatus.loading ? (
        <CircularProgress className={classes.progress} />
      ) : (
        (followNotifications.length > 0 &&
          followNotifications.map((follower) => (
            <NotificationItem user={follower} key={follower.nickname} />
          ))) || <Warning text={"You have no notifications."} image={"info"} />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  userStatus: state.user,
  activeRoute: state.activeRoute.route,
  mainProfile: state.mainProfile.data,
  followNotifications: state.user.notifications,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveRoute: (route) => dispatch(setActiveRoute(route)),
    fetchNotifications: () => dispatch(fetchNotifications()),
    fetchRejectFollower: (user) => dispatch(fetchRejectFollower(user)),
    fetchApproveFollower: (user) => dispatch(fetchApproveFollower(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

/*

{notification.length < 0 &&
  notification.map((nickname) => {
    return (
      nickname !== user.nickname ||
      (nickname.length === 0 && (
      */

/*

      return (
    <React.Fragment>
      {userStatus.loading ? (
        <CircularProgress />
      ) : (
        (followNotifications &&
          followNotifications.map((follower) => (
            <NotificationItem user={follower} key={follower.nickname} />
          ))) || <Typography>Nothing here</Typography>
      )}
    </React.Fragment>
  );
};
*/
