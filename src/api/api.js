import axios from "axios";

import { setStoreData, getStoreData, removeStoreData } from '../utils/token'

const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Authorization": "Bearer " + getStoreData(process.env.TOKEN_NAME) || null
  }
});

api.interceptors.response.use(
  (success) => success,
  (error) => {
    if (error.response.status === 401) {
      axios.post(`${baseURL}/users/refresh-token`, null, {
        headers: {
          "Authorization": `Bearer ${getStoreData(process.env.TOKEN_NAME)}` ?? null
        }
      })
        .then(response => response.data)
        .then(({ token, refreshToken }) => {
          setStoreData({name: process.env.TOKEN_NAME, token})
          setStoreData({name: process.env.REFRESH_TOKEN_NAME, refreshToken})

          error.config.headers["Authorization"] = `Bearer ${token}`;

          return api.request(error.config);
        })
        .catch(err => {
          console.log(err);
          removeStoreData(process.env.TOKEN_NAME)
          removeStoreData(process.env.REFRESH_TOKEN_NAME)

          alert("Suas credenciais expiraram, faça login novamente.")
          window.location.href = "/";
        });
    }
    console.log(error);
    return Promise.reject(error);
  }
)

export default api;