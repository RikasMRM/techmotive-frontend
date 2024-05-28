import axios from "axios";

const backendApiURL = import.meta.env.VITE_BE_API_URI
  ? `${import.meta.env.VITE_BE_API_URI}/api/v1`
  : "http://localhost:5000/api/v1";

export const backendApi = axios.create({
  baseURL: backendApiURL,
  headers: {
    "Content-Type": "application/json",
  },
});
