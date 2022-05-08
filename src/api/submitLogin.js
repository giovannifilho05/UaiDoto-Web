import api from "./api";

export default async function submitLogin(email, password) {
  return api.post('/login', {
    email, password
  });
}