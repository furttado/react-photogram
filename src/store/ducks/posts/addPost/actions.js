import { types } from "./types";
import api from "../../../../services/api";
import { fetchMainProfile } from "../../mainProfile/actions";
import { fetchAllPosts } from "../allPosts/actions";

export const fetchAddPost = (post) => {
  const body = {
    title: post.location,
    picture: post.picture,
    description: post.description,
    role: post.role,
  };
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      await api.post(`posts/create`, body);
      dispatch(addPost());
      dispatch(fetchMainProfile());
      dispatch(fetchAllPosts());
    } catch (err) {
      dispatch(setError(err.response.data));
    }
  };
};

const addPost = () => {
  return {
    type: types.SUCCESS_ADD_POST,
  };
};

const setLoading = () => {
  return {
    type: types.LOADING_ADD_POST,
  };
};

const setError = (err) => {
  return {
    type: types.ERROR_ADD_POST,
    payload: err,
  };
};

export const setDefault = () => {
  return {
    type: types.RESET_ADD_POST,
  };
};
