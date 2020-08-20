import { createMuiTheme } from "@material-ui/core/styles";

const background = "#fafafa";
const box = "#ffffff";
const primaryFont = "#262626";
const secondaryFont = "#8e8e8e";
const border = "#dbdbdb";
const blueButton = "#0396f6";
const redButton = "#ed4956";
const pinkButton = "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)";
const pinkButtonShadow = "0 3px 5px 2px rgba(255, 105, 135, .3)";

export default createMuiTheme({
  palette: {
    common: {
      background: background,
      box: box,
      primaryFont: primaryFont,
      secondaryFont: secondaryFont,
      border: border,
      blueButton: blueButton,
      redButton: redButton,
      pinkButton: pinkButton,
      pinkButtonShadow: pinkButtonShadow,
    },
    primary: {
      main: primaryFont,
    },
    secondary: {
      main: secondaryFont,
    },
    background: {
      default: background,
    },
  },
  typography: {
    fontFamily: "Roboto",
    color: primaryFont,
    h3: {
      fontWeight: 300,
    },
    subtitle1: {},
  },

  presets: {
    centeredWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
    },
    buttonDefault: {
      textTransform: "uppercase",
      outline: "none",
      color: box,
    },

    blueButton: {
      marginTop: "1%",
      background: blueButton,
      borderRadius: 3,
      border: 0,
      color: background,
      height: 48,
      padding: "0 30px",
      boxShadow: blueButton,
      "&:hover": {
        background: redButton,
      },
    },
    redButton: {
      marginTop: "1%",
      background: redButton,
      borderRadius: 3,
      border: 0,
      color: background,
      height: 48,
      padding: "0 30px",
      boxShadow: redButton,
      "&:hover": {
        background: blueButton,
      },
    },
    grayButton: {
      marginTop: "1%",
      background: background,
      borderRadius: 3,
      border: 0,
      color: primaryFont,
      height: 48,
      padding: "0 30px",
      boxShadow: "none",
      "&:hover": {
        background: border,
        boxShadow: "none",
      },
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          //margin: 0,
          //padding: 0,
          //boxSizing: "border-box",
        },
        "#root": {},
        html: {
          //WebkitFontSmoothing: "auto",
        },
        body: {
          background: "#ffff",
        },
      },
    },
  },
});
