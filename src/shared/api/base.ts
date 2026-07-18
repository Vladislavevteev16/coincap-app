import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "https://rest.coincap.io/v3";

const API_KEY = import.meta.env.VITE_API_KEY || "";

export const coincapClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

coincapClient.interceptors.request.use((request) => {
  request.headers["Authorization"] = `Bearer ${API_KEY}`;

  return request;
});
