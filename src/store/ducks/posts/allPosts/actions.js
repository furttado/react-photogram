import { types } from "./types";

import api from "../../../../services/api";

export const fetchAllPosts = (page) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await api.get(`posts/all/${page}`);
      dispatch(setAllPosts(response.data));
    } catch (err) {
      dispatch(setError(err.response.data));
    }
  };
};

const setAllPosts = (posts) => {
  return {
    type: types.SET_ALL_POSTS,
    payload: posts,
  };
};

const setLoading = () => {
  return {
    type: types.LOADING_ALL_POSTS,
  };
};

const setError = (err) => {
  return {
    type: types.ERROR_ALL_POSTS,
    payload: err,
  };
};
