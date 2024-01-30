import axios from "axios";

const cloud = true;
const imgCloud = true;

const url = cloud
  ? "http://bdcallingacademy.com:8000/api/"
  : "http://192.168.10.13:8000/api/";

const imageUrl = imgCloud
  ? "http://bdcallingacademy.com:8000"
  : "http://192.168.10.13:8000";

export const baseUrl = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export const imgUrl = imageUrl;
