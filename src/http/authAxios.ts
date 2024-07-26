import axios from "axios";

const BASE_URL = "http://45.130.148.122:5000";

const $authAxios = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
})

$authAxios.interceptors.request.use((config) => {
  const initialUser = typeof window !== 'undefined' && localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null;

  config.headers.Authorization = `Bearer ${initialUser.token}`
  return config
})