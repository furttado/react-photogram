import { types } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_ALL_POSTS:
      return { ...state, loading: true };
    case types.SET_ALL_POSTS:
      return { ...state, loading: false, data: [...state.data, action.payload], error: "" };
    case types.ERROR_ALL_POSTS:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
