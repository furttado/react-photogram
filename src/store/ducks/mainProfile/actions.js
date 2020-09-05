import { types } from "./types";

import api from "../../../services/api";

export const fetchMainProfile = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.get("users/profiles/user");
    dispatch(setMainProfile(response.data.profile));
  } catch (err) {
    dispatch(setError(err.response.data || err.message));
  }
};

export const setMainProfile = (user) => {
  return {
    type: types.SET_MAIN_PROFILE,
    payload: user,
  };
};

const setLoading = () => {
  return {
    type: types.LOADING_MAIN_PROFILE,
  };
};

const setError = (err) => {
  return {
    type: types.ERROR_MAIN_PROFILE,
    payload: err,
  };
};
