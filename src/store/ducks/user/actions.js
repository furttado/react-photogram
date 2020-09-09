import { types } from "./types";
import api from "../../../services/api";
import { fetchFriendProfile } from "../friendProfile/actions";
import { fetchMainProfile } from "../mainProfile/actions";

export const fetchFollow = (user) => async (dispatch) => {
  const body = { nickname: user };
  dispatch(setLoading());
  try {
    const response = await api.post("users/follow", body);
    dispatch(setFollow(response.data.message));
    dispatch(fetchFriendProfile(user));

    setTimeout(() => {
      dispatch(resetUserLog());
    }, 1000);
  } catch (err) {
    dispatch(setError(err.response.data || err.message));
  }
};

export const fetchUnfollow = (user) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.delete(`users/unfollow/${user}`);
    dispatch(setUnfollow(response.data));
    dispatch(fetchFriendProfile(user));

    setTimeout(() => {
      dispatch(resetUserLog());
    }, 1000);
  } catch (err) {
    dispatch(setError(err.response.data));
  }
};

export const fetchNotifications = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.get("users/follow-requests");
    dispatch(setNotifications(response.data));
    /*
    setTimeout(() => {
      dispatch(resetUserLog());
    }, 1000);
    */
  } catch (err) {
    dispatch(setError(err.response.data));
  }
};

export const fetchRejectFollower = (user) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.delete(`users/reject/${user}`);
    dispatch(setRejectFollower(response.data));
    dispatch(fetchNotifications());

    setTimeout(() => {
      dispatch(resetUserLog());
    }, 1000);
  } catch (err) {
    dispatch(setError(err.response.data));
  }
};

export const fetchApproveFollower = (user) => async (dispatch) => {
  const body = { nickname: user };
  dispatch(setLoading());
  try {
    const response = await api.post(`users/approve`, body);
    dispatch(setApproveFollower(response.data));
    dispatch(fetchNotifications());

    setTimeout(() => {
      dispatch(resetUserLog());
    }, 1000);
  } catch (err) {
    dispatch(setError(err.response.data));
  }
};

export const fetchEditUserProfile = (data) => async (dispatch) => {
  const body = { name: data.fullname, picture: data.avatar, bio: data.bio };
  dispatch(setLoading());
  try {
    const response = await api.post("users/editProfile", body);
    dispatch(setEditUserProfile(response.data));
    dispatch(fetchMainProfile());

    setTimeout(() => {
      dispatch(resetUserLog());
    }, 1000);
  } catch (err) {
    dispatch(setError(err.response.data));
  }
};

// Action creators
const setFollow = (responseData) => {
  return {
    type: types.SET_FOLLOW_USER,
    payload: responseData,
  };
};
const setUnfollow = (responseData) => {
  return {
    type: types.SET_UNFOLLOW_USER,
    payload: responseData,
  };
};
const setApproveFollower = (responseData) => {
  return {
    type: types.SET_APPROVE_USER,
    payload: responseData,
  };
};
const setRejectFollower = (user) => {
  return {
    type: types.SET_REJECT_USER,
    payload: user,
  };
};
const setEditUserProfile = (responseData) => {
  return {
    type: types.SET_EDIT_USER,
    payload: responseData,
  };
};
const setLoading = () => {
  return {
    type: types.LOADING_USER,
  };
};
const setError = (err) => {
  return {
    type: types.ERROR_USER,
    payload: err,
  };
};
const setNotifications = (responseData) => {
  return {
    type: types.SET_NOTIFICATIONS,
    payload: responseData,
  };
};
const resetUserLog = () => {
  return {
    type: types.RESET_USER_LOG,
  };
};
