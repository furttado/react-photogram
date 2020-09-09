import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.common.secondary,
    padding: "1% 3% 1% 3%",
    maxWidth: "600px",
    width: "100vw",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridTemplateAreas: `"avatar title"
    "details details"
    "description description"
    `,

    [theme.breakpoints.up("md")]: {
      gridTemplateAreas: `"avatar title"
        "avatar details"
        "avatar description"
        `,
    },
  },

  avatar: {
    gridArea: "avatar",
    width: theme.spacing(10),
    height: theme.spacing(10),

    [theme.breakpoints.up("md")]: {
      width: theme.spacing(20),
      height: theme.spacing(20),
      marginRight: "20%",
    },
  },

  userNameItem: {
    gridArea: "title",
    marginLeft: "1em",

    [theme.breakpoints.up("md")]: {
      display: "grid",
      alignContent: "center",
      marginLeft: 0,
      heigth: "1px",
    },
  },
  buttonRoot: {
    color: undefined,
    backgroundColor: undefined,
  },
  button: {
    ...theme.presets.blueButton,
    ...theme.presets.buttonDefault,
    width: "50%",
    height: "20px",
    padding: 0,
  },
  unfollowButton: {
    ...theme.presets.redButton,
    ...theme.presets.buttonDefault,
    width: "50%",
    height: "20px",
    padding: 0,
  },

  detailsContainer: {
    gridArea: "details",
    marginTop: "1em",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",

    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      width: "70%",
    },
  },

  descriptionContainer: {
    gridArea: "description",
    marginTop: "1em",
    marginBottom: "1em",

    [theme.breakpoints.up("md")]: {},
  },
  divider: {
    backgroundColor: theme.palette.common.border,
    width: "100%",
    height: 1,
    border: "1px",
    marginBottom: "1.5em",
  },
}));
