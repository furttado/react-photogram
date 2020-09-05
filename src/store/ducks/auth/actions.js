import { types } from "./types";
import api from "../../../services/api";

export const fetchLogin = (user) => {
  const body = { email: user.email, password: user.password };
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await api.post(`users/login`, body);
      localStorage.setItem("@photogram", response.data.accessToken);
      dispatch(setLogin());
      window.location.pathname = "/";
      return response.data.user;
    } catch (err) {
      console.log(err.response);
      dispatch(setError(err.response.data));
      setTimeout(() => {
        dispatch(setResetLog());
      }, 1000);
    }
  };
};

export const fetchLogout = () => {
  return (dispatch) => {
    dispatch(setLoading());
    try {
      localStorage.removeItem("@photogram");
      dispatch(setLogout());

      window.location.pathname = "/login";
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};

const setLogin = () => {
  return {
    type: types.SET_LOGIN,
  };
};
const setLogout = () => {
  return {
    type: types.SET_LOGOUT,
  };
};

const setLoading = () => {
  return {
    type: types.LOADING_AUTH,
  };
};

const setError = (err) => {
  return {
    type: types.ERROR_AUTH,
    payload: err,
  };
};
const setResetLog = () => {
  return {
    type: types.RESET_AUTH_LOG,
  };
};
