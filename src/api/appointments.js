import api from "./api";

export async function getAppointmentsNotProcessed({id}) {
  return api.get(`/appointments/doctor/${id}/not-processed`)
} 