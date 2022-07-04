import axios from "axios";

const baseURL = "https://uai-doto-backend.herokuapp.com";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Authorization": "Bearer " + localStorage.getItem('token') || null
  }
});

api.interceptors.response.use(
  (success) => success,
  (error) => {
    if (error.response.status === 401) {
      axios.post(`${baseURL}/users/refresh-token`, null, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`,
        }
      })
        .then(response => response.data)
        .then(({ token, refreshToken }) => {
          localStorage.getItem({name: 'token', token})
          localStorage.getItem({name: 'refreshToken', refreshToken})

          error.config.headers["Authorization"] = `Bearer ${token}`

          return api.request(error.config);
        })
        .catch(err => {
          console.log(err)
          localStorage.removeItem('token')
          localStorage.removeItem('refreshToken')

          alert("Suas credenciais expiraram, faça login novamente.")
          window.location.href = "/signIn";
        });
    }
    console.log(error)
    return Promise.reject(error)
  }
)

export default api;