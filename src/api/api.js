import axios from "axios";

const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Authorization": "Bearer " + sessionStorage.getItem("token") || null
  }
});

api.interceptors.response.use(
    success => success,
    error => {
      if (error.response.status === 401) {
        axios.post(`${baseURL}/users/refresh-token`, null, {
          headers: {
            "Authorization": "Bearer " + sessionStorage.getItem("refreshToken")
          }
        })
        .then(response => {
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("refreshToken", response.data.refreshToken);

          error.config.headers["Authorization"] = "Bearer " + response.data.token;

          return api.request(error.config);
        })
        .catch(err => {
          console.log(err);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("refreshToken");

          alert("Suas credenciais expiraram, faça login novamente.");
          window.location.href = "/";
        });
      }
      console.log(error);
      return Promise.reject(error);
    }
  )

export default api;