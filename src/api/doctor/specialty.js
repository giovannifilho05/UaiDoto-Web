import api from "../api";

export default async function getSpecialties() {
  const result = await api.get('/users/doctors/specialties')
  
  if(result.status === 200) {
    return result.data
  }

  console.log('Error', result.data)
  return []
}