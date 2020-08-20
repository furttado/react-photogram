import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";
import { GlobalContext } from "../../hooks/GlobalState";

import { AppBar, Toolbar, Button, InputBase, Hidden, Avatar } from "@material-ui/core";
import { Home, ExitToApp, AddAPhoto } from "@material-ui/icons";

import photoGramIcon from "../../assets/images/photogram-black.svg";
const avatarImg = "https://i.pinimg.com/originals/e4/57/e9/e457e9abaabaf01aa957a9b7def01326.jpg";

const Header = (props) => {
  const classes = useStyles();
  const { globalState, logout, updateActiveRoute } = useContext(GlobalContext);

  function handleLogout() {
    logout();
    localStorage.removeItem("@App:JWT_TOKEN");
    props.history.push("/login");
  }

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
              <Button
                component={Link}
                to="/"
                className={
                  (globalState.activeRoute === "/" && classes.activeButton) ||
                  classes.activeButton.default
                }
                onClick={() => updateActiveRoute("/")}
              >
                <Home />
              </Button>

              <Button
                component={Link}
                to="/new-post"
                className={
                  (globalState.activeRoute === "/new-post" && classes.activeButton) ||
                  classes.activeButton.default
                }
                onClick={() => updateActiveRoute("/new-post")}
              >
                <AddAPhoto />
              </Button>

              <Button component={Link} to="/profile" onClick={() => updateActiveRoute("/profile")}>
                <Avatar
                  alt={"user.name"}
                  src={avatarImg}
                  className={
                    (globalState.activeRoute === "/profile" && classes.activeAvatar) ||
                    classes.inactiveAvatar
                  }
                />
              </Button>

              <Button onClick={handleLogout}>
                <ExitToApp />
              </Button>
            </nav>
          </section>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
