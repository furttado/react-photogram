import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { useStyles } from "./styles";

import { AppBar, Toolbar, Button, InputBase, Hidden, Avatar, IconButton } from "@material-ui/core";
import { Home, ExitToApp, AddAPhoto } from "@material-ui/icons";

import photoGramIcon from "../../assets/images/photogram-black.svg";

import { fetchMainProfile } from "../../store/ducks/mainProfile/actions";
import { setActiveRoute } from "../../store/ducks/styles/activeRoute";
import { fetchLogout } from "../../store/ducks/auth";

const Header = (props) => {
  const classes = useStyles();
  const { activeRoute, setActiveRoute, mainProfile, fetchMainProfile, fetchLogout } = props;

  function handleLogout() {
    fetchLogout();
  }

  useEffect(() => {
    if (mainProfile.data.length === 0) {
      fetchMainProfile();
    }
  }, [mainProfile.data]);

  return (
    <React.Fragment>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <section className={classes.section}>
            <img src={photoGramIcon} className={classes.icon} alt="Photogram icon" />

            <Hidden smDown>
              <InputBase placeholder="search profile..." classes={{ input: classes.searchField }} />
            </Hidden>

            <nav className={classes.buttonsContainer}>
              <IconButton
                component={Link}
                to="/"
                className={(activeRoute === "/" && classes.activeButton) || classes.inactiveButton}
                onClick={() => setActiveRoute("/")}
              >
                <Home />
              </IconButton>

              <IconButton
                component={Link}
                to="/new-post"
                className={
                  (activeRoute === "/new-post" && classes.activeButton) || classes.inactiveButton
                }
                onClick={() => setActiveRoute("/new-post")}
              >
                <AddAPhoto />
              </IconButton>

              <IconButton
                component={Link}
                to={`/profile/${mainProfile.data.nickname}`}
                onClick={() => setActiveRoute("/profile")}
              >
                <Avatar
                  alt={"user.name"}
                  src={mainProfile.data.picture}
                  className={
                    (activeRoute === "/profile" && classes.activeAvatar) || classes.inactiveAvatar
                  }
                />
              </IconButton>

              <IconButton onClick={handleLogout} className={classes.inactiveButton}>
                <ExitToApp />
              </IconButton>
            </nav>
          </section>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeRoute: state.activeRoute.route,
  mainProfile: state.mainProfile,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMainProfile: () => dispatch(fetchMainProfile()),
    setActiveRoute: (route) => dispatch(setActiveRoute(route)),
    fetchLogout: () => dispatch(fetchLogout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
