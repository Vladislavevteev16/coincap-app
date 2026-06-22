import axios from "axios";

export const coincapClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

coincapClient.interceptors.request.use((request) => {
  request.headers["Authorization"] = `Bearer ${import.meta.env.VITE_API_KEY}`;

  return request;
});
