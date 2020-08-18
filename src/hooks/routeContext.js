import React, { useState } from "react";

export const RouteContext = React.createContext([0, () => {}]); // context

export const RouteProvider = ({ children }) => {
  // provider
  const [state, setState] = useState(0);

  return <RouteContext.Provider value={[state, setState]}>{children}</RouteContext.Provider>;
};
