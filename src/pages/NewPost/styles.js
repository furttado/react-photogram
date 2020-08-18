import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1em",
    width: "100vw",
    maxWidth: "600px",
    marginTop: "1em",
    borderRadius: "5px",
    padding: "2%",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      border: `1px solid ${theme.palette.common.border}`,
      background: theme.palette.common.box,
    },
  },

  form: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "3%",
    justifyItems: "center",
    paddingBottom: "10%",

    [theme.breakpoints.up("md")]: {},
  },
  textField: {
    width: "95%",
    background: theme.palette.background.default,
  },

  buttonsContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },

  postButton: {
    ...theme.presets.blueButton,
    marginTop: "3%",
    width: "20%",
    height: "99%",
    [theme.breakpoints.up("md")]: {
      marginTop: "2%",
    },
  },
  goBackButton: {
    ...theme.presets.grayButton,
    height: "30px",
    border: `1px solid ${theme.palette.common.border}`,
    justifySelf: "center",

    "& svg": {
      fontSize: 15,
    },

    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
}));
