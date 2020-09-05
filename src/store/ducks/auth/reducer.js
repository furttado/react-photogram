import { types } from "./types";

const initialState = {
  loading: false,
  isAuthenticated: localStorage.getItem("@photogram"),
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_AUTH:
      return { ...state, loading: true };
    case types.SET_LOGIN:
      return { ...state, loading: false, isAuthenticated: true, error: "" };
    case types.SET_LOGOUT:
      return { ...state, loading: false, isAuthenticated: false, error: "" };
    case types.ERROR_AUTH:
      return { ...state, loading: false, isAuthenticated: false, error: action.payload };
    case types.RESET_AUTH_LOG:
      return { ...state, loading: false, isAuthenticated: false, error: false };
    default:
      return state;
  }
};

export default reducer;
