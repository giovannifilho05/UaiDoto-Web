import React, { useEffect, useState } from "react"

import { getAppointmentsNotProcessed } from "../../api/appointments"
import jwt_decode from "jwt-decode"

import ConfirmationCard from "../../components/ConfirmationCard"
import NavbarComponent from "../../components/Navbar"

import { Container, Content } from "./style"

import { getStoreData } from "../../utils/token"

export default function Home() {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    (async () => {
      const token = getStoreData('token')

      const { sub: id } = jwt_decode(token);
    
      getAppointmentsNotProcessed({ id })
        .then(response => console.log(response))
        .catch(err => console.error(err))
    })()
  }, [])


  return (
    <>
      <NavbarComponent />

      <Container>
        <Content>
          <div className="row pt-4">
            <h1>Home</h1>
          </div>

          <hr />

          <div className="row">
            <h3>Consultas esperando confirmação:</h3>

            <ConfirmationCard />
            <ConfirmationCard />
            <ConfirmationCard />
            <ConfirmationCard />
            <ConfirmationCard />
            <ConfirmationCard />
          </div>

          <div className="row mt-5">
            <h3>Consultas:</h3>

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
                    <tr>
                      <th>dd/mm</th>
                      <td>hh:ii</td>
                      <td>Fulano</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          title="Cancelar consulta"
                        >
                          <i className="fa fa-calendar-xmark"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-success ms-3"
                          title="Finalizar consulta"
                        >
                          <i className="fa fa-calendar-check"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>dd/mm</th>
                      <td>hh:ii</td>
                      <td>Fulano</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          title="Cancelar consulta"
                        >
                          <i className="fa fa-calendar-xmark"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-success ms-3"
                          title="Finalizar consulta"
                        >
                          <i className="fa fa-calendar-check"></i>
                        </button>
                      </td>
                    </tr>
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
                    <tr>
                      <th>dd/mm</th>
                      <td>hh:ii</td>
                      <td>Fulano</td>
                      <td>Você não confirmou a consulta</td>
                    </tr>
                    <tr>
                      <th>dd/mm</th>
                      <td>hh:ii</td>
                      <td>Fulano</td>
                      <td>Paciente cancelou a consulta</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
}
