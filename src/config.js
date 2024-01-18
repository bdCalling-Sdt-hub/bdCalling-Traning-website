import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "http://192.168.10.13:8000/api/",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export const imgUrl = "http://192.168.10.13:8000";
