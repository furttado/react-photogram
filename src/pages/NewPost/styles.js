import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    maxWidth: "600px",
    [theme.breakpoints.up("md")]: {},
  },
  mainContainer: {
    borderRadius: "5px",
    padding: 0,
    [theme.breakpoints.up("md")]: {
      border: `1px solid ${theme.palette.common.border}`,
    },
  },
  form: {
    background: theme.palette.common.box,
    borderRadius: "5px",
    maxWidth: "600px",
    marginTop: "2%",
    paddingTop: "2%",
    paddingBottom: "10%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "3%",
    justifyItems: "center",

    [theme.breakpoints.up("md")]: {
      border: `1px solid ${theme.palette.common.border}`,
      width: "600px",
    },
  },
  textField: {
    width: "95%",
    background: theme.palette.background.default,
  },

  postButton: {
    ...theme.presets.blueButton,
    marginTop: "3%",
    width: "20%",
    height: "99%",
    justifySelf: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: "2%",
    },
  },
  goBackButton: {
    ...theme.presets.grayButton,
    width: "15%",
    height: "30px",
    border: `1px solid ${theme.palette.common.border}`,
    marginLeft: "2.5%",

    "& svg": {
      fontSize: 15,
    },

    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
}));
