import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    marginTop: "1.5em",
  },

  main: {
    display: "grid",
    justifyContent: "center",
  },
}));
