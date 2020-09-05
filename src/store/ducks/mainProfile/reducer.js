import { types } from "./types";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_MAIN_PROFILE:
      return { ...state, loading: true };
    case types.SET_MAIN_PROFILE:
      return { ...state, loading: false, data: action.payload, error: false };
    case types.ERROR_MAIN_PROFILE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
