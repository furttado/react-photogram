import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100%",
    width: "100%",
  },

  content: {
    width: "300px",
    marginTop: "2rem",
    paddingBottom: "2rem",
  },

  header: {
    width: "300x",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",

    "& img": {
      width: "100px",
      height: "auto",
    },
  },

  formRegister: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2%",
    marginBottom: "6rem",
  },

  formLogin: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "0.7rem",
    marginBottom: "1rem",
    //marginTop: "5%",
  },

  registerButton: {
    textTransform: "uppercase",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "100%",
  },
  rootButton: {
    backgroundColor: undefined,
    color: undefined,
  },

  loginButton: {
    textTransform: "uppercase",
    width: "100%",
    marginTop: "1rem",
    background: theme.palette.common.blueButton,
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: theme.palette.common.blueButton,
    "&:hover": {
      background: theme.palette.common.blueButton,
    },
  },
  textField: {
    background: theme.palette.common.box,

    "& textarea": {
      height: "300px",
    },
  },
  progress: {
    color: "white",
    padding: "3%",
    //fontSize: 3,
  },
}));
