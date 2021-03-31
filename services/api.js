import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/api",
  timeout: 5000,
  transformResponse: axios.defaults.transformResponse.concat((data) => {
    return data;
  }),
  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
});

export default api;
