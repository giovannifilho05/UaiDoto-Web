import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import handleAppointment from "../../api/doctor/handleAppointment";

import Modal from "../../components/RegisterMedicines";

const notify = (msg) => toast.success(msg);

export default function FinishedAppointmentLine({
  appointment,
  removeAppointment,
}) {
  return (
    <tr>
      <th>{moment(appointment.dateTime).format("DD/MM/YYYY")}</th>
      <td>{moment(appointment.dateTime).format("HH:mm")}</td>
      <td>{appointment.patientName}</td>
      <td>
        <Modal />
      </td>
    </tr>
  );
}
