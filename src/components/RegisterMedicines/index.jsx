import { useEffect, useState } from "react";
import Modal from "react-modal";

import { FormButton, Input, Select } from "../../components/Form";

import { Container } from "./style";

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

export default function RegisterMedicines() {
  const [medicines, setMedicines] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    // Pega os medicamentos da base
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addMedicine = (data) => {
    setMedicines([...medicines, data]);
  };

  const removeMedicine = (index) => {
    const newMedicine = [...medicines];
    newMedicine.splice(index, 1);
    setMedicines(newMedicine);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Ver Medicamentos
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
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
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
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
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
