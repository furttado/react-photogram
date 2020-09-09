import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { useStyles } from "./styles";

import { AppBar, Toolbar, InputBase, Hidden, Avatar, ButtonBase } from "@material-ui/core";
import { Home, ExitToApp, AddAPhoto, Notifications, Search } from "@material-ui/icons";
import photoGramIcon from "../../assets/images/photogram-black.svg";
import SearchItem from "../../pages/Search";

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
    fetchMainProfile();
  }, [fetchMainProfile]);
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
              <ButtonBase
                component={Link}
                to="/"
                className={(activeRoute === "/" && classes.activeButton) || classes.inactiveButton}
                onClick={() => setActiveRoute("/")}
              >
                <Home />
              </ButtonBase>

              <ButtonBase
                component={Link}
                to="/new-post"
                className={
                  (activeRoute === "/new-post" && classes.activeButton) || classes.inactiveButton
                }
                onClick={() => setActiveRoute("/new-post")}
              >
                <AddAPhoto />
              </ButtonBase>

              <Hidden mdUp>
                <ButtonBase
                  aria-label={"Search"}
                  component={Link}
                  to="/search"
                  onClick={() => setActiveRoute("/search")}
                  className={
                    (activeRoute === "/search" && classes.activeButton) || classes.inactiveButton
                  }
                >
                  <Search />
                </ButtonBase>
              </Hidden>

              <ButtonBase
                component={Link}
                to="/notifications"
                className={
                  (activeRoute === "/notifications" && classes.activeButton) ||
                  classes.inactiveButton
                }
              >
                <Notifications />
              </ButtonBase>

              <ButtonBase
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
              </ButtonBase>

              <ButtonBase onClick={handleLogout} className={classes.inactiveButton}>
                <ExitToApp />
              </ButtonBase>
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
