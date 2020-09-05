import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "1.2%",
      width: "100%",
    },
    display: 'flex',
    flexDirection: "column",
  },
  progress: {
    width: '90%',
    marginTop: '2rem',
    justifySelf: 'center',
    color: theme.palette.common.blueButton
  },
  getNewPagesButton: {
    alignSelf: 'center',
    bottom: '1rem',
    marginTop: '2rem',
    padding: 0,
    transition: 'none',

    "& :hover": {
      background: theme.palette.common.background,

      "& svg": {
        color: theme.palette.common.blueButton
      }
    },


  },
  getOldPagesButton: {
    alignSelf: 'center',
    marginBottom: '2rem',
    padding: 0,
    transition: 'none',

    "& :hover": {
      background: theme.palette.common.background,

      "& svg": {
        color: theme.palette.common.blueButton
      }
    },
  }

}));
