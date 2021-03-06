import React, { useState } from "react";

import { Input, Select, FormButton } from "../Form";
import { Container } from "./style";

export default function WorkDayItem({ addMedicine }) {
  const [name, setName] = useState("");
  const [gap, setGap] = useState(0);
  const [firstDose, setFirstDose] = useState("");
  const [dose, setDose] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [doseQuantity, setDoseQuantity] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || gap <= 0 || !dose || !doseQuantity || !firstDose || !measurement) {
      alert("Preencha todos os campos");
    } else {
      const lastTakenDose = new Date(firstDose)
      lastTakenDose.setHours(lastTakenDose.getHours() - gap - 3)

      addMedicine({
        name,
        gap,
        dose: `${dose} ${measurement}`,
        doseQuantity,
        lastTakenDose,
        notes,
      })
    }
  }

  return (
    <div>
      <Container className="d-flex">
        <form
          className="my-auto mx-auto col-12 col-md-12"
          onSubmit={handleSubmit}
        >
          <div className="row my-2">
            <Input
              className="col-12 col-md-12"
              id="nome"
              label="Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          </div>
          <div className="row my-2">
            <Input
              className="col-12 col-md-3"
              id="gap"
              label="Intervalo de uso (em horas)"
              type="number"
              value={gap}
              onChange={(e) => setGap(parseInt(e.target.value))}
            />
            <Input
              className="col-12 col-md-3"
              id="firstDose"
              label="Data da primeira dose"
              type="datetime-local"
              min={new Date().toISOString().split("T")[0] + "T00:00"}
              value={firstDose}
              onChange={(e) => setFirstDose(e.target.value)}
            />

            <Select
              className="col-12 col-md-3"
              id="measurement"
              label="Medida da dosagem"
              value={measurement}
              onChange={(e) => setMeasurement(e.target.value)}
            >
              <option value="ml">ML</option>
              <option value="gotas">Gotas</option>
              <option value="comprimido(s)">Comprimido(s)</option>
            </Select>

            <Input
              className="col-12 col-md-3 "
              id="dose"
              label="Dosagem"
              type="number"
              value={dose}
              onChange={(e) => setDose(e.target.value)}
            />

            <Input
              className="col-12 col-md-3"
              id="amount"
              label="Quantidade de doses"
              type="number"
              value={doseQuantity}
              onChange={(e) => setDoseQuantity(e.target.value)}
            />
          </div>
          <div className="row my-2">
            <Input
              id="notes"
              label="Observa????o"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className="col">
            <FormButton
              divClass="mt-2 d-flex"
              btnClass="btn btn-primary ms-auto my-3"
              type="submit"
            >
              <div style={{ fontSize: 15 }}> Adicionar Medicamento</div>
            </FormButton>
          </div>
        </form>
      </Container>
    </div>
  );
}
