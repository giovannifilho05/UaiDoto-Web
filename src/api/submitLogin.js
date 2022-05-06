import axios from "axios";

export default async function submitLogin(email, password) {
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  return axios.post('http://localhost:8080/login', {
    email, password
  });
}