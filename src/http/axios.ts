import axios, { AxiosInstance } from "axios";

// local url
const BASE_URL = "http://45.130.148.122:5000";

const $axios: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  // headers: {
  //   "ngrok-skip-browser-warning": "any",
  // },
});

export default $axios;
