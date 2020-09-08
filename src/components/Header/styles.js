import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: 0,
    padding: 0,
    width: "100vw",
    border: `1px solid ${theme.palette.common.border}`,
    overflow: "hidden",
  },
  toolbar: {
    background: theme.palette.common.box,
    height: "10px",
    padding: "0 1rem 0 1rem",

    display: "flex",
    justifyContent: "center",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  section: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    justifyItems: "center",
    alignItems: "center",

    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr auto 1fr",
    },
  },
  icon: {
    width: "7.5rem",
    paddingLeft: "10%",
    marginRight: "5%",
    justifySelf: "left",
    color: theme.palette.common.blackIcons,

    [theme.breakpoints.up("sm")]: {
      width: "8.5rem",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "5%",
      width: "7rem",
    },
  },
  searchField: {
    background: theme.palette.common.background,
    border: `1px solid ${theme.palette.common.border}`,
    borderRadius: "5px",
    paddingLeft: "1em",
    [theme.breakpoints.up("md")]: {},
  },
  buttonsContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto",
    marginLeft: "1rem",
  },
  activeButton: {
    color: theme.palette.common.redButton,
    //marginLeft: "0.8rem",
    marginRight: "1rem",
  },
  inactiveButton: {
    //marginLeft: "0.8rem",
    marginRight: "1rem",
    color: theme.palette.common.blackIcons,
  },

  inactiveAvatar: {
    //marginLeft: "0.8rem",
    marginRight: "1rem",

    width: theme.spacing(2.9),
    height: theme.spacing(2.9),
    alignSelf: "center",
    border: 0,
  },
  activeAvatar: {
    //marginLeft: "0.8rem",
    marginRight: "1rem",

    width: theme.spacing(2.9),
    height: theme.spacing(2.9),
    alignSelf: "center",
    border: `2px solid ${theme.palette.common.redButton}`,
  },
}));
