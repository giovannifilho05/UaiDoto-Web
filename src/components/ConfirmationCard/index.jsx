import moment from 'moment'
import toast, { Toaster } from 'react-hot-toast'

import handleAppointment from '../../api/doctor/handleAppointment'

const notify = (msg) => toast.success(msg)


export default function ConfirmationCard({ appointment, removeAppointment }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 my-3">
      <Toaster />
      <div className="card text-center">
        <div className="card-header">{appointment.patientName}</div>

        <div className="card-body">
          <p className="m-0">Consulta: {moment(appointment.dateTime).format(' DD/MM/YYYY - HH:mm')}</p>
        </div>

        <div className="card-footer">
          <p>Confirmar consulta?</p>

          <div className="row">
            <button
              type="button"
              className="btn btn-danger col-5 ms-1"
              onClick={() => {
                handleAppointment(appointment, { active: false })
                  .then(() => notify('Consulta cancelada com sucesso!'))
                  .then(removeAppointment)
              }}
            >
              <i className="fas fa-thumbs-down"></i>
            </button>
            <button
              type="button"
              className="btn btn-success col-5 ms-auto me-1"
              onClick={() => {
                handleAppointment(appointment, { active: true })
                  .then(() => notify('Consulta confirmada com sucesso!'))
                  .then(removeAppointment)
              }}
            >
              <i className="fas fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}