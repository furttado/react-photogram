export default (state, action) => {
  switch (action.type) {
    case "UPDATE_ROUTE":
      return {
        ...state,
        activeRoute: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
