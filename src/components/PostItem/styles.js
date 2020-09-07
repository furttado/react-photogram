import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "600px",
    border: `1px solid ${theme.palette.common.border}`,
    marginBottom: "1.5em",
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

  cardHeader: {
    "& div:first-child": {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
}));
