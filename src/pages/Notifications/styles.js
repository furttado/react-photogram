import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr 2fr",
    minWidth: "100%",
  },
  buttonsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignSelf: "center",
  },
  buttons: {
    color: theme.palette.common.blackIcons,
    "&:hover": {},
  },
  acceptButton: {
    color: theme.palette.common.blueButton,
    "&:hover": {
      transition: "1s",
      color: theme.palette.common.blackIcons,
    },
  },
  denyButton: {
    color: theme.palette.common.redButton,
    "&:hover": {
      transition: "1s",
      color: theme.palette.common.blackIcons,
    },
  },
}));
