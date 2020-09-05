//import { LOADING, SET_MAIN_PROFILE, ERROR } from "./types";
import { types } from "./types";

import api from "../../../services/api";

export const fetchFriendProfile = (user) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await api.get(`users/profiles/${user}`);
      dispatch(setFriendProfile(response.data));
    } catch (err) {
      dispatch(setError(err.response.data));
    }
  };
};

const setFriendProfile = (user) => {
  return {
    type: types.SET_FRIEND_PROFILE,
    payload: user,
  };
};

const setLoading = () => {
  return {
    type: types.LOADING_FRIEND_PROFILE,
  };
};

const setError = (err) => {
  return {
    type: types.ERROR_FRIEND_PROFILE,
    payload: err,
  };
};
