import React, { useEffect, useState } from "react"

import { getAppointmentsActive, getAppointmentsFinished, getAppointmentsNotProcessed } from "../../api/appointments"
import jwt_decode from "jwt-decode"

import AppointmentsTable from "../../components/AppointmentsTable"
import ConfirmationCard from "../../components/ConfirmationCard"
import NavbarComponent from "../../components/Navbar"

import { Container, Content } from "./style"

export default function Home() {
  const [appointmentsNotProcessed, setAppointmentsNotProcessed] = useState([])
  const [appointmentsConfirmed, setAppointmentsConfirmed] = useState([])
  const [appointmentsFinished, setAppointmentsFinished] = useState([])
  const [appointmentExcluded, setAppointmentExcluded] = useState([])
  const [refreshAppointments, setRefreshAppointments] = useState(false)

  useEffect(() => {
    async function getAppointments() {
      const token = localStorage.getItem('token')

      const { sub: id } = jwt_decode(token);

      getAppointmentsNotProcessed({ id })
        .then(appointments => {
          setAppointmentsNotProcessed(appointments)
          console.log('AppointmentsNotProcessed: ', appointments)
        })
        .catch(err => console.error(err))

      getAppointmentsActive({ id })
        .then(appointments => {
          setAppointmentsConfirmed(appointments)
          console.log('appointmentsConfirmed: ', appointments)
        })
        .catch(err => console.error(err))

      getAppointmentsActive({ id, params: { actives: 0 } })
        .then(appointments => {
          setAppointmentExcluded(appointments)
          console.log('AppointmentsNoActive: ', appointments)
        })
        .catch(err => console.error(err))

      getAppointmentsFinished({ id })
        .then(appointments => {
          setAppointmentsFinished(appointments)
          console.log('AppointmentsFinished: ', appointments)
        })
        .catch(err => console.error(err))
    }

    getAppointments()
  }, [refreshAppointments])

  function refreshAllAppointments() {
    setRefreshAppointments(!refreshAppointments)
  }

  return (
    <>
      <NavbarComponent />

      <Container>
        <Content>
          <div className="row pt-4">
            <h2>Painel de consultas</h2>
          </div>

          <hr />

          <div className="row">
            <h4>Consultas esperando confirma????o:</h4>

            {
              appointmentsNotProcessed && appointmentsNotProcessed.filter((appointment) => !appointment.processed).map((appointment, index) => (
                <ConfirmationCard
                  key={index}
                  appointment={appointment}
                  removeAppointment={refreshAllAppointments}
                />

              ))
            }

            {
              appointmentsNotProcessed.length === 0 &&
              <h5>Nenhuma consulta encontrada.</h5>
            }

          </div>

          <AppointmentsTable
            appointmentsConfirmed={appointmentsConfirmed}
            appointmentsExcluded={appointmentExcluded}
            appointmentsFinished={appointmentsFinished}
            removeAppointment={refreshAllAppointments}
          />
        </Content>
      </Container>
    </>
  );
}
