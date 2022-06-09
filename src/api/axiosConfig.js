import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Authorization": `Bearer ${getStoreData(token)}` ?? null
  }
  
});

export default api;