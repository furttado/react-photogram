import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  progress: {
    width: "90%",
    marginTop: "2rem",
    justifySelf: "center",
    color: theme.palette.common.blueButton,
  },
}));
