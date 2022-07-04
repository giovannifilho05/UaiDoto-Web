import api from "../api";

export default async function handleAppointment(appointment, params) {
  const formatedAppointment = { ...appointment, processed: true, ...params };
  const result = await api.put('/appointments', formatedAppointment)

  if (result.status === 200) {
    return result.data
  }

  return []
}