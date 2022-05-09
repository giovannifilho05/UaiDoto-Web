import React, { useState } from "react";
import WorkDayItem from "./WorkDayItem";

export default function WorkDaysForm({
  initialData,
  setData,
  handleStep,
  handleSubmit,
}) {
  const [workDays, setWorkDays] = useState(initialData?.workDays || []);
  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const addDay = (data) => {
    setWorkDays([...workDays, data]);
    setData({ "workDays": [...workDays, data]});
  };


  const removeDay = (index) => {
    const newWorkDays = [...workDays];
    newWorkDays.splice(index, 1);
    setWorkDays(newWorkDays);
    setData({ "workDays": newWorkDays});
  };

  function updateParent() {
    setData([{ workDays }]);
    handleSubmit();
  }

  return (
    <div className="row">
      <div className="form-group">
        <WorkDayItem addDay={addDay} />
        {workDays.length > 0 && (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Dia</th>
                <th scope="col">Hora Início</th>
                <th scope="col">Hora Fim</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {workDays.map((workDay, index) => (
                <tr key={index}>
                  <td>{days[workDay.day]}</td>
                  <td>{workDay.workHours.start}</td>
                  <td>{workDay.workHours.end}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeDay(index)}
                      className="btn btn-danger"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="mt-3 form-group d-flex">
          <button
            onClick={() => handleStep(-1)}
            className="btn btn-outline-dark"
            type="button"
          >
            Voltar
          </button>

          <button
            onClick={updateParent}
            className="btn btn-success ms-auto"
            type="button"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
