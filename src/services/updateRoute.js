export const updateRoute = (routeValue, setRouteValue) => {
  if (window.location.pathname === "/register" && routeValue !== 0) {
    setRouteValue(0);
  } else if (window.location.pathname === "/login" && routeValue !== 1) {
    setRouteValue(1);
  }
};
