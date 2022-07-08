import React, { useState } from "react";

import { Input, Select, FormButton } from "../Form";
import { Container } from "./style";

export default function WorkDayItem({ addMedicine }) {

  const [name, setName] = useState('');
  const [gap, setGap] = useState('');
  const [dose, setDose] = useState('');
  const [measurement, setMeasurement] = useState('');
  const [doseQuantity, setDoseQuantity] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !gap || !dose) {
      alert("Preencha todos os campos");
    } else {
      addMedicine({ name, gap, dose: `${dose} ${measurement}`, doseQuantity, notes });
    }
  }

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
          <Input
            id="gap"
            label="Intervalo de uso"
            type="number"
            value={gap}
            onChange={(e) => setGap(e.target.value)}
          />

          <Select
            id="gap"
            label="Medida da dosagem"
            value={measurement}
            onChange={(e) => setMeasurement(e.target.value)}
          >
            <option value="ml">ML</option>
            <option value="gotas">Gotas</option>
            <option value="comprimido(s)">Comprimido(s)</option>
            
          </Select>

          <Input
            id="dose"
            label="Dosagem"
            type="number"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
          />
          
          <Input
            id="amount"
            label="Quantidade de doses"
            type="number"
            value={doseQuantity}
            onChange={(e) => setDoseQuantity(e.target.value)}
          />

          <Input
            id="notes"
            label="Observação"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
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
