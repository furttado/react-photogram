import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "600px",
    width: "100vw",
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "80% 10%",
    marginBottom: "1.5rem",
    marginTop: "0.5rem",
    padding: "0 1rem 0 1rem",
    width: "100%",
    justifyContent: "center",
  },
  searchField: {
    backgroundColor: theme.palette.common.box,
    border: `1px solid ${theme.palette.common.border}`,
    height: "2rem",
    borderRadius: `3px`,
    paddingLeft: "1rem",
    marginRight: "1rem",
  },
  searchInput: {
    alignSelf: "center",
  },

  userListContainer: {
    width: "100%",
    backgroundColor: theme.palette.common.box,
    borderRadius: `3px`,

    display: "grid",
    gridTemplateColumns: "1fr",
    padding: "1%",
    marginBottom: "0.5rem",

    [theme.breakpoints.up("sm")]: {
      border: `1px solid ${theme.palette.common.border}`,
    },
  },
  subtitle: {
    marginBottom: "1rem",
  },
  buttonRoot: {
    ...theme.presets.blueButton,
  },
  searchButton: {
    ...theme.presets.buttonDefault,
    transition: "0.5s",
    color: theme.palette.common.blackIcon,
    "&:hover": {
      color: theme.palette.common.blueButton,
    },
  },
  listItem: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr 1fr",
    minWidth: "100%",
  },
  goButton: {
    justifySelf: "right",
    alignSelf: "center",
    color: theme.palette.common.blueButton,
    "&:hover": {
      transition: "1s",
      color: theme.palette.common.blackIcons,
    },
  },
  progress: {
    width: "90%",
    marginTop: "2rem",
    justifySelf: "center",
    color: theme.palette.common.blueButton,
  },
}));
