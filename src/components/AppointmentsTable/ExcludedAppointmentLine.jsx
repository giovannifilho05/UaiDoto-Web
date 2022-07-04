import moment from 'moment'

export default function ExcludedAppointmentLine({ appointment }) {
  return (
    <tr>
      <th>{moment(appointment.dateTime).format('DD/MM/YYYY')}</th>
      <td>{moment(appointment.dateTime).format('HH:mm')}</td>
      <td>{appointment.patientName}</td>
      <td>{appointment.observations}</td>
    </tr>
  )
}