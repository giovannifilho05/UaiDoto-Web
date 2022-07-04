import api from "../api";

export async function getAppointmentsNotProcessed({ id }) {
  const result = await api.get(`/appointments/doctor/${id}/not-processed`)
  console.log('getAppointmentsNotProcessed', result.status);

  if (result.status === 200) {
    const { content: appointments } = result.data

    return await Promise.all(appointments.map(formatAppointment))
  }

  return []
}

export async function getAppointmentsActive({ id, params }) {
  const result = await api.get(`/appointments/doctor/${id}/active`, { params })
  console.log('getAppointmentsActive', result.status);

  if (result.status === 200) {
    const { content: appointments } = result.data

    return await Promise.all(appointments.map(formatAppointment))
  }

  return []
}

export async function getAppointmentsFinished({ id }) {
  const result = await api.get(`/appointments/doctor/${id}/finished`)
  console.log('getAppointmentsFinished', result.status);

  if (result.status === 200) {
    const { content: appointments } = result.data

    return await Promise.all(appointments.map(formatAppointment))
  }

  return []
}

async function formatAppointment(appointment) {
  const patientId = appointment.patientId
  const result = await api.get(`/users/${patientId}`)

  const { name } = result.data

  return { ...appointment, patientName: name }
}