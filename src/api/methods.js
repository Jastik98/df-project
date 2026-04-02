import request from "./request";
const googleHost =
  "https://sheets.googleapis.com/v4/spreadsheets/1V8aFVQE9vJ1mYIL-FpLBIKhlP4-aXmb1sOwfwshKvWI/values/Sheet1?key=AIzaSyAkOpNzxNQDeGUTOXa4HPXguCFfXcKzQs8";
const serverHost = "http://node2.fe.a-level.com.ua";

export const getMenu = () =>
  request({
    method: "GET",
    url: googleHost,
  });

export const getPosts = (data) =>
  request({
    method: "POST",
    url: `${serverHost}/get`,
    data,
  });

export const addPost = (data) =>
  request({
    method: "POST",
    url: `${serverHost}/add`,
    data,
  });
