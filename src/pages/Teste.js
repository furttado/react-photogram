import React, { useEffect, useState } from "react";
import axios from "axios";
//const fetch = require('node-fetch')
import { getToken } from "../services/auth";

const api = axios.create({
  baseURL: "http://localhost:3001",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET, POST, DELETE",
  //  },
});

const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NDlkMzZhLTU4MTUtNDFmNC05NGJjLTliNDIzOTM3NTMzMyIsInJvbGUiOiJCQVNJQyIsIm5pY2tuYW1lIjoiaGFycnlwb3R0ZXIiLCJpYXQiOjE1OTg1MzEzNTcsImV4cCI6MTU5ODYxNzc1N30.EYMTAK0ZUiZDWi4u8UiDW5jum1MVcU4_lRBA21LfE1A"


api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.token = token; //config.headers.Authorization
  }
  return config;
});


const Teste = () => {
  const [data, setData] = useState();
  const baseURL = "http://localhost:3001";
  const user = "hermione";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NDlkMzZhLTU4MTUtNDFmNC05NGJjLTliNDIzOTM3NTMzMyIsInJvbGUiOiJCQVNJQyIsIm5pY2tuYW1lIjoiaGFycnlwb3R0ZXIiLCJpYXQiOjE1OTg1MzEzNTcsImV4cCI6MTU5ODYxNzc1N30.EYMTAK0ZUiZDWi4u8UiDW5jum1MVcU4_lRBA21LfE1A"


  const getProfile = async () => {
    const body = { nickname: "hermione" };
    const headers = { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4NDlkMzZhLTU4MTUtNDFmNC05NGJjLTliNDIzOTM3NTMzMyIsInJvbGUiOiJCQVNJQyIsIm5pY2tuYW1lIjoiaGFycnlwb3R0ZXIiLCJpYXQiOjE1OTg1NDU4NDUsImV4cCI6MTU5ODYzMjI0NX0.Xfp0kZfOLP8e5ffKRI3OPRZvtvRPIs1PW-NAxH2GPmo" }
    try {
      const response = await axios.get(`http://localhost:3001/posts/user/hermione`, { headers });
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  const login = async () => {
    const body = { email: "harrypotter@warlock.com", password: "Password123" };
    //const headers = {}
    try {
      const response = await axios.post(`http://localhost:3001/users/login`, body);
      setData(response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const getProfileApi = async () => {
    try {
      const response = await api.get(`users/profiles/hermione`);
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      console.log('teste falhou')
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (!data) {
      //getProfile();
      //login()
      getProfileApi()
    }
  }, [data]);

  return <h1>Test pages</h1>;
};

export default Teste;


/*
  const getProfile = async () => {
    // const body = { nickname: user };
    try {
      const response = await api.get(`/users/profiles/${user}`);
      setData(response.data);
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };
  const login = async () => {
    const body = { email: "harrypotter@warlock.com", password: "Password123" };
    try {
      const response = await api.get(`/users/login`, body);
      setData(response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
*/