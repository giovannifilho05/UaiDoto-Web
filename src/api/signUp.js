import api from "./api";

export default async function signUp(data) {
  return api.post('/users', data)
} 