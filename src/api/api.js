import axios from "axios";

import { setStoreData, getStoreData, removeStoreData } from '../utils/token'

const baseURL = "https://uai-doto-backend.herokuapp.com";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Authorization": "Bearer " + getStoreData('token') || null
  }
});

api.interceptors.response.use(
  (success) => success,
  (error) => {
    if (error.response.status === 401) {
      axios.post(`${baseURL}/users/refresh-token`, null, {
        headers: {
          "Authorization": `Bearer ${getStoreData('refreshToken')}` ?? null
        }
      })
        .then(response => response.data)
        .then(({ token, refreshToken }) => {
          setStoreData({name: 'token', token})
          setStoreData({name: 'refreshToken', refreshToken})

          error.config.headers["Authorization"] = `Bearer ${token}`

          return api.request(error.config);
        })
        .catch(err => {
          console.log(err)
          removeStoreData('token')
          removeStoreData('refreshToken')

          alert("Suas credenciais expiraram, faça login novamente.")
          window.location.href = "/signIn";
        });
    }
    console.log(error)
    return Promise.reject(error)
  }
)

export default api;