import moment from 'moment'
import toast, { Toaster } from 'react-hot-toast';
import handleAppointment from '../../api/doctor/handleAppointment'

const notify = (msg) => toast.success(msg);

export default function ConfirmedAppointmentLine({ appointment, removeAppointment }) {
  return (
    <tr>
      <th>{moment(appointment.dateTime).format('DD/MM/YYYY')}</th>
      <td>{moment(appointment.dateTime).format('HH:mm')}</td>
      <td>{appointment.patientName}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          title="Cancelar consulta"
          onClick={() => {
            handleAppointment(appointment, { active: false })
              .then(() => notify("Consulta cancelada com sucesso!"))
              .then(removeAppointment)
          }}
        >
          <i className="fa fa-calendar-xmark"></i>
        </button>
        <Toaster />

        <button
          type="button"
          className="btn btn-success ms-3"
          title="Finalizar consulta"
          onClick={() => {
            handleAppointment(appointment, { finished: true })
            .then(() => notify("Consulta finalizada com sucesso!"))
            .then(removeAppointment)
          }}
        >
          <i className="fa fa-calendar-check"></i>
        </button>
      </td>
    </tr>
  )
}