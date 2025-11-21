// src/utils/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "https://oneindia-backend.onrender.com/api", // match backend
  timeout: 10000,
});
