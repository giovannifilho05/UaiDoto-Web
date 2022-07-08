import { useEffect, useState } from "react";
import Modal from "react-modal";

import handleAppointment from "../../api/doctor/handleAppointment";
import MedicineItem from "./MedicineItem";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#modal");

export default function RegisterMedicines({ appointment }) {
  const [medicines, setMedicines] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (appointment.medicines) {
      setMedicines(appointment.medicines);
    }
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false);
  }

  function addMedicine(data) {
    setMedicines([...medicines, data]);
  }

  function handleSaveMedicines() {
    handleAppointment(appointment, { medicines })
      .then(() => closeModal())
  }

  function removeMedicine(index) {
    const newMedicine = [...medicines];
    newMedicine.splice(index, 1);
    setMedicines(newMedicine);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Ver Medicamentos
      </button>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="row">
          <div className="form-group">
            <MedicineItem addMedicine={addMedicine} />
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Dosagem</th>
                  <th scope="col">Intervalo (em horas)</th>
                  <th scope="col">Quantidade de doses</th>
                  <th scope="col">Observação</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((medicine, index) => (
                  <tr key={index}>
                    <td>{medicine.name}</td>
                    <td>{medicine.dose}</td>
                    <td>{medicine.gap}</td>
                    <td>{medicine.doseQuantity}</td>
                    <td>{medicine.notes}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => removeMedicine(index)}
                        className="btn btn-danger"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button
          onClick={handleSaveMedicines}
        >
          Salvar
        </button>

        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
