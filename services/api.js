import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000/api",
  baseURL: "https://realhub-api.herokuapp.com/api",
});

export default api;
