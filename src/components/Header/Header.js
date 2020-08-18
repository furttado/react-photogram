import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";
import { RouteContext } from "../../hooks/routeContext";
import { updateRoute } from "../../services/updateRoute";

import { AppBar, Toolbar, Button, InputBase, Hidden, Avatar } from "@material-ui/core";
import { Home, ExitToApp, AddAPhoto } from "@material-ui/icons";

import photoGramIcon from "../../assets/images/photogram-black.svg";
const avatarImg = "https://i.pinimg.com/originals/e4/57/e9/e457e9abaabaf01aa957a9b7def01326.jpg";

const Header = (props) => {
  const classes = useStyles();
  const [routeValue, setRouteValue] = useContext(RouteContext);

  const handleChangeRoute = (value) => {
    setRouteValue(value);
  };

  useEffect(() => {
    updateRoute(routeValue, setRouteValue);
  }, [routeValue, setRouteValue]);

  return (
    <React.Fragment>
      {routeValue === 0 || routeValue === 1 ? undefined : (
        <React.Fragment>
          <AppBar className={classes.appBar} elevation={0}>
            <Toolbar className={classes.toolbar}>
              <section className={classes.section}>
                <img src={photoGramIcon} className={classes.icon} alt="Photogram icon" />

                <Hidden smDown>
                  <InputBase
                    placeholder="search profile..."
                    classes={{ input: classes.searchField }}
                  />
                </Hidden>

                <nav className={classes.buttonsContainer}>
                  <Button
                    component={Link}
                    to="/"
                    onClick={() => handleChangeRoute(2)}
                    className={
                      (routeValue === 2 && classes.activeButton) || classes.activeButton.default
                    }
                  >
                    <Home />
                  </Button>

                  <Button
                    component={Link}
                    to="/new-post"
                    onClick={() => handleChangeRoute(4)}
                    className={
                      (routeValue === 4 && classes.activeButton) || classes.activeButton.default
                    }
                  >
                    <AddAPhoto />
                  </Button>

                  <Button component={Link} to="/profile" onClick={() => handleChangeRoute(3)}>
                    <Avatar
                      alt={"user.name"}
                      src={avatarImg}
                      className={
                        (routeValue === 3 && classes.activeAvatar) || classes.inactiveAvatar
                      }
                    />
                  </Button>

                  <Button component={Link} to="/login" onClick={() => handleChangeRoute(1)}>
                    <ExitToApp />
                  </Button>
                </nav>
              </section>
            </Toolbar>
          </AppBar>
          <div className={classes.toolbarMargin} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Header;
