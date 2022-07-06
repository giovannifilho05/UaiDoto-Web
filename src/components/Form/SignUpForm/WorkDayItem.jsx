import React, { useState } from "react";
import Input from "../Input";
import Select from "../Select";

export default function WorkDayItem({ addDay }) {
  const [day, setDay] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handlerBtn = () => {
    addDay({ day: day, workHours: { start: start, end: end } });
  };

  return (
    <div className="row">
      <div className="col-12 col-md-5">
        <Select
          id="day"
          label="Selecione o dia"
          className="mt-2"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="0">Domingo</option>
          <option value="1">Segunda-feira</option>
          <option value="2">Terça-feira</option>
          <option value="3">Quarta-feira</option>
          <option value="4">Quinta-feira</option>
          <option value="5">Sexta-feira</option>
          <option value="6">Sábado</option>
        </Select>
      </div>
      <div className="col-12 col-md-3">
        <Input
          id="startTime"
          label="Horário de início do trabalho"
          className="mt-2"
          type="time"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div className="col-12 col-md-3">
        <Input
          id="endTime"
          label="Horário de fim do trabalho"
          className="mt-2"
          type="time"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>
      <div className="col-12 col-md-1 mt-auto">
        <button
          onClick={handlerBtn}
          type="button"
          className="btn btn-success w-100"
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
