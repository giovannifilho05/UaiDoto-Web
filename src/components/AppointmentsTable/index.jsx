import ConfirmedAppointmentLine from "./ConfirmedAppointmentLine"
import ExcludedAppointmentLine from "./ExcludedAppointmentLine"
import FinishedAppointmentLine from "./FinishedAppointmentLine"

export default function AppointmentsTable({ appointmentsConfirmed, appointmentsExcluded, appointmentsFinished, removeAppointment }) {
  return (
    <div className="row mt-5">
      <h3>Consultas</h3>

      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="confirmed-tab"
            data-bs-toggle="tab"
            data-bs-target="#confirmed"
            type="button"
            role="tab"
            aria-controls="confirmed"
            aria-selected="true"
          >
            Confirmadas
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="unconfirmed-tab"
            data-bs-toggle="tab"
            data-bs-target="#unconfirmed"
            type="button"
            role="tab"
            aria-controls="unconfirmed"
            aria-selected="true"
          >
            Excluídas
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="finished-tab"
            data-bs-toggle="tab"
            data-bs-target="#finished"
            type="button"
            role="tab"
            aria-controls="finished"
            aria-selected="true"
          >
            Finalizadas
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="confirmed"
          role="tabpanel"
          aria-labelledby="confirmed-tab"
        >
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col" className="col-1">
                  Dia
                </th>
                <th scope="col" className="col-1">
                  Hora
                </th>
                <th scope="col" className="col-8">
                  Nome do Paciente
                </th>
                <th scope="col" className="col-2">
                  Ação
                </th>
              </tr>
            </thead>
            <tbody>
              {
                appointmentsConfirmed &&
                appointmentsConfirmed.map((appointment, index) => (
                  <ConfirmedAppointmentLine
                    key={index}
                    appointment={appointment}
                    removeAppointment={removeAppointment}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
        <div
          className="tab-pane fade"
          id="unconfirmed"
          role="tabpanel"
          aria-labelledby="unconfirmed-tab"
        >
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col" className="col-1">
                  Dia
                </th>
                <th scope="col" className="col-1">
                  Hora
                </th>
                <th scope="col" className="col-4">
                  Nome do Paciente
                </th>
                <th scope="col" className="col-4">
                  Motivo
                </th>
              </tr>
            </thead>
            <tbody>
              {
                appointmentsExcluded &&
                appointmentsExcluded.map((appointment, index) => (
                  <ExcludedAppointmentLine
                    key={index}
                    appointment={appointment}
                    removeAppointment={removeAppointment}
                  />
                ))
              }
            </tbody>
          </table>
        </div>

        <div
          className="tab-pane fade"
          id="finished"
          role="tabpanel"
          aria-labelledby="finished-tab"
        >

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col" className="col-1">
                  Dia
                </th>
                <th scope="col" className="col-1">
                  Hora
                </th>
                <th scope="col" className="col-8">
                  Nome do Paciente
                </th>
                <th scope="col" className="col-2">
                  Ação
                </th>
              </tr>
            </thead>
            <tbody>
              {
                appointmentsFinished &&
                appointmentsFinished.map((appointment, index) => (
                  <FinishedAppointmentLine
                    key={index}
                    appointment={appointment}
                    removeAppointment={removeAppointment}
                  />
                ))
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}