import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Authorization": `Bearer ${getStoreData(process.env.TOKEN_NAME)}` ?? null
  }
  
});

export default api;