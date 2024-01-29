// axiosInstance.js
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    common: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": window.CSRF_TOKEN,
    },
  },
  withCredentials: true,
});

export default axiosInstance;

