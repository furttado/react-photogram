import { types } from "./types";

const initialState = {
  loading: false,
  data: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_USER:
      return { ...state, loading: true };
    case types.SET_FOLLOW_USER:
      return { ...state, loading: false, data: action.payload, error: false };
    case types.SET_UNFOLLOW_USER:
      return { ...state, loading: false, data: action.payload, error: false };
    case types.SET_EDIT_USER:
      return { ...state, loading: false, data: action.payload, error: false };
    case types.RESET_USER_LOG:
      return { ...state, loading: false, data: false, error: false };
    case types.ERROR_USER:
      return { ...state, loading: false, data: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
