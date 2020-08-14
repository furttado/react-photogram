import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "600px",
    marginTop: "2em",
    border: `1px solid ${theme.palette.common.border}`,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  likeButton: {
    color: theme.palette.common.redButton,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  defaultLikeButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
