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
    padding: 0,
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
    width: "100px",
    height: "auto",
    paddingLeft: "10%",
    marginRight: "5%",
    justifySelf: "left",

    [theme.breakpoints.up("sm")]: {
      height: "80%",
      width: "auto",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "5%",
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
    gridTemplateColumns: "auto auto auto auto",

    "& a, span": {},
    "& svg": {},
  },
  activeButton: {
    color: theme.palette.common.redButton,
  },

  inactiveButton: {
    color: theme.palette.common.primaryFont,
  },
  inactiveAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    alignSelf: "center",
    border: 0,
  },
  activeAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    alignSelf: "center",
    border: `2px solid ${theme.palette.common.redButton}`,
  },
}));
