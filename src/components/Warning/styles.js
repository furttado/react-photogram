import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    fontSize: 50,
  },

  imageConstainer: {
    color: theme.palette.common.secondaryFont,
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    color: theme.palette.common.secondaryFont,
  },
}));
