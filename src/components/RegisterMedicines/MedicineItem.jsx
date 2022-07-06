import React, { useState } from "react";
import { FormButton } from "../Form";
import Input from "../Form/Input";
import Select from "../Form/Select";
import { Container } from "./style";

export default function WorkDayItem({ addMedicine }) {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [dosage, setDosage] = useState("");

  const [medicines, setMedicines] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !time || !dosage) {
      alert("Preencha todos os campos");
    } else {
      console.log("OK");
      // enviar dados para a consulta ??
    }
  }
  const handlerBtn = () => {
    addMedicine({ /* Colocar coisas do medicamento aqui */ });
  };

  return (
    <div>
      
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
    </div>
  );
}
