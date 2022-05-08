import axios from "axios";

const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Authorization": "Bearer " + localStorage.getItem("token") || null
  }
});

api.interceptors.response.use(
    success => success,
    error => {
      if (error.response.status === 401) {
        axios.post(`${baseURL}/users/refresh-token`, null, {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("refreshToken")
          }
        })
        .then(response => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("refreshToken", response.data.refreshToken);

          error.config.headers["Authorization"] = "Bearer " + response.data.token;

          return api.request(error.config);
        })
        .catch(err => {
          console.log(err);
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");

          alert("Suas credenciais expiraram, faça login novamente.");
          window.location.href = "/";
        });
      }
      console.log(error);
      return Promise.reject(error);
    }
  )

export default api;