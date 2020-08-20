import React, { createContext, useReducer } from "react";

import reducer from "./reducer";
import { isAuthenticated } from "../routes/Route";

const initialState = {
  isLoggedIn: isAuthenticated(),
  activeRoute: "",
  userProfile: [
    {
      id: "2",
      name: "Jessy",
      nickname: "jessy",
      description:
        "💞 Photographer & youtuber <br /> 🌎 Google Local Guide <br /> 📸 @jessy <br /> 📺 tv.com/jessy",
      posts: 2, //[],
      followers: 5000,
      following: 600,
    },
  ],
  //users: [],
  //posts: []
};

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Actions
  const login = () => {
    dispatch({
      type: "LOGIN",
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  const updateActiveRoute = (route) => {
    dispatch({
      type: "UPDATE_ROUTE",
      payload: route,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        globalState: state,
        login,
        logout,
        updateActiveRoute,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
