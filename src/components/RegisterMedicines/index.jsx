import { useState } from "react";
import Modal from 'react-modal';

import { FormButton, Input, Select } from "../../components/Form";

import { Container } from "./style";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal');

export default function RegisterMedicines() {
  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  const [name, setName] = useState("")
  const [time, setTime] = useState("")
  const [dosage, setDosage] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !time || !dosage) {
      alert('Preencha todos os campos')
    }
    else {
      console.log('OK')
      // enviar dados para a consulta ?? 
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <Container className="d-flex">
          <form className="my-auto col-12 col-md-8" onSubmit={handleSubmit}>
            <Input
              id="nome"
              label="Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              id="time"
              label="Horário"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="0">00:00</option>
              <option value="0">01:00</option>
              <option value="0">03:00</option>
              <option value="0">04:00</option>
              <option value="0">05:00</option>
              <option value="0">06:00</option>
              <option value="0">07:00</option>
              <option value="0">08:00</option>
              <option value="0">09:00</option>
              <option value="0">10:00</option>
              <option value="0">11:00</option>
              <option value="0">12:00</option>
            </Select>

            <Input
              id="dosage"
              label="Dosagem"
              type="number"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
            // formato da dosagem ??????
            />

            <div className="col">
              <FormButton
                divClass="mt-2 d-flex"
                btnClass="btn-primary ms-auto"
                type="submit"
              >
                Registrar
              </FormButton>
            </div>

          </form>
        </Container>
      </Modal>
    </div>
  );
}