import moment from "moment";

import RegisterMedicines from "../../components/RegisterMedicines";

export default function FinishedAppointmentLine({
  appointment
}) {

  console.log('appointment: ', appointment)
  return (
    <tr>
      <th>{moment(appointment.dateTime).format("DD/MM/YYYY")}</th>
      <td>{moment(appointment.dateTime).format("HH:mm")}</td>
      <td>{appointment.patientName}</td>
      <td>
        <RegisterMedicines 
          appointment={appointment}
        />
      </td>
    </tr>
  );
}
