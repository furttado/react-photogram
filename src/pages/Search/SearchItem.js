import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Typography,
  ButtonBase,
  InputBase,
  CircularProgress,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { Search, KeyboardArrowRight } from "@material-ui/icons";

import { fetchFriendProfile } from "../../store/ducks/friendProfile/actions";
import { fetchSearchUser } from "../../store/ducks/user/actions";
import { setActiveRoute } from "../../store/ducks/styles/activeRoute";

import Warning from "../../components/Warning";
import { useStyles } from "./styles";

const SearchItem = (props) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState({ keyword: "" });
  const { activeRoute, searchData, loading, fetchSearchUser, setActiveRoute } = props;

  const handleChange = (e) => {
    setSearchValue({ ...searchValue, keyword: e.target.value });
  };

  const handleSearch = (e) => {
    if (!searchValue.keyword) {
      return;
    }
    e.preventDefault();
    fetchSearchUser(searchValue.keyword);
  };

  const handleSearchOnPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      if (!searchValue.keyword) {
        return;
      }
      fetchSearchUser(searchValue.keyword);
    }
  };

  const User = ({ user }) => {
    return (
      <React.Fragment>
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
              </React.Fragment>
            }
          />
          <ButtonBase
            className={classes.goButton}
            component={Link}
            to={`/profile/${user.nickname}`}
          >
            <KeyboardArrowRight />
          </ButtonBase>
        </ListItem>
      </React.Fragment>
    );
  };

  useEffect(() => {
    if (window.location.pathname !== activeRoute) {
      setActiveRoute(window.location.pathname);
    }
  }, [setActiveRoute, activeRoute]);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <form className={classes.form}>
          <InputBase
            placeholder="search profile..."
            classes={{ input: classes.searchField }}
            className={classes.searchInput}
            value={searchValue.keyword}
            onChange={handleChange}
            onKeyPress={handleSearchOnPress}
          />
          <ButtonBase className={classes.searchButton} onClick={handleSearch}>
            <Search />
          </ButtonBase>
        </form>
        <React.Fragment>
          {loading ? (
            <CircularProgress className={classes.progress} />
          ) : searchData.length > 0 ? (
            searchData.map((userData) => (
              <section className={classes.userListContainer} key={userData.nickname}>
                <User user={userData} />
              </section>
            ))
          ) : searchData.length === 0 ? (
            <Warning text={"Nothing found"} image={"not-found"} />
          ) : (
            <Warning text={"Nothing here yet, do a search."} image={"info"} />
          )}
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeRoute: state.activeRoute.route,
  searchData: state.user.searchData,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFriendProfile: (user) => dispatch(fetchFriendProfile(user)),
    setActiveRoute: (route) => dispatch(setActiveRoute(route)),
    fetchSearchUser: (user) => dispatch(fetchSearchUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);
