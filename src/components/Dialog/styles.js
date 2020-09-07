import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  confirmBtn: {
    ...theme.presets.blueButton,
  },
  cancelBtn: {
    ...theme.presets.redButton,
    marginTop: 0,
  },
}));
