import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "10%",
    margin: `${0} auto`,
    width: "95%",
    height: "max-content",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    border: "none",

    display: "grid",
    gridTemplateColumns: "1fr",
    padding: theme.spacing(2, 4, 3),

    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
  },
  header: {
    display: "grid",
    gridTemplateColumns: "90% 10%",
  },
  subtitle: {
    marginBottom: "1rem",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto auto auto auto",
    gap: "1rem",
  },
  textField: {},

  updateButton: {
    ...theme.presets.buttonDefault,
    ...theme.presets.blueButton,
    width: "90%",
    justifySelf: "left",

    [theme.breakpoints.up("sm")]: {
      width: "20%",
      justifySelf: "center",
    },
  },
  buttonDisabled: {
    ...theme.presets.buttonDefault,
    ...theme.presets.grayButton,
    backgroundColor: theme.palette.common.border,
    width: "90%",
    justifySelf: "left",

    [theme.breakpoints.up("sm")]: {
      width: "20%",
      justifySelf: "center",
    },
  },

  buttonRoot: {
    ...theme.presets.blueButton,
  },
  clearButton: {
    transition: "0.5s",
    color: theme.palette.common.blackIcons,
    "&:hover": {
      color: theme.palette.common.redButton,
    },
  },

  formRow: {
    display: "grid",
    gridTemplateColumns: "90% 10%",
  },
}));
