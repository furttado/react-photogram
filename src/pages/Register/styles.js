import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    ...theme.presets.centeredWrapper,
  },

  content: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "300px",
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
    marginBottom: "20%",
  },

  formLogin: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "3%",
    marginBottom: "7%",
    marginTop: "5%",
  },

  registerButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },

  loginButton: {
    marginTop: "1%",
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
  },
}));
