import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "1.2%",
      width: "100%",
    },
  },
}));
