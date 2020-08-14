export const updateRoute = (routeValue, setRouteValue) => {
  if (window.location.pathname === "/register" && routeValue !== 0) {
    setRouteValue(0);
  } else if (window.location.pathname === "/login" && routeValue !== 1) {
    setRouteValue(1);
  } else if (window.location.pathname === "/" && routeValue !== 2) {
    setRouteValue(2);
  } else if (window.location.pathname === "/profile" && routeValue !== 3) {
    setRouteValue(3);
  } else if (window.location.pathname === "/new-post" && routeValue !== 4) {
    setRouteValue(4);
  }
};
