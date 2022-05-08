import React, { useState } from "react";
import WorkDayItem from "./WorkDayItem";

export default function WorkDaysForm() {
  const [workDays, setWorkDays] = useState([]);
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
    console.log(data);
    setWorkDays([...workDays, data]);
  };

  const removeDay = (index) => {
    const newWorkDays = [...workDays];
    newWorkDays.splice(index, 1);
    setWorkDays(newWorkDays);
  };

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
                  <td>{workDay.start}</td>
                  <td>{workDay.end}</td>
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
      </div>
    </div>
  );
}
