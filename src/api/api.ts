import axios from "axios";

const api = axios.create({
  baseURL: "https://shop-server.up.railway.app",
});

export default api;
