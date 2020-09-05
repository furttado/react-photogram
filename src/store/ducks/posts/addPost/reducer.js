import { types } from "./types";

const initialState = {
  loading: false,
  success: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_ADD_POST:
      return { ...state, loading: true };
    case types.SUCCESS_ADD_POST:
      return { ...state, loading: false, success: true, error: "" };
    case types.ERROR_ADD_POST:
      return { ...state, loading: false, success: false, error: action.payload };
    case types.RESET_ADD_POST:
      return { ...state, loading: false, success: false, error: "" };
    default:
      return state;
  }
};

export default reducer;
