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
  presets: {},
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
