const SET_ROUTE = "SET_ROUTE";

export const setActiveRoute = (route) => {
  return {
    type: SET_ROUTE,
    payload: route,
  };
};

const initialState = {
  route: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE:
      return { ...state, route: action.payload };
    default:
      return state;
  }
};

export default reducer;
