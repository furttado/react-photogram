import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  //baseURL: "http://localhost:3001",
  baseURL: "https://social-network-v1.herokuapp.com",
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.token = token; //config.headers.Authorization
  }
  return config;
});

export default api;
