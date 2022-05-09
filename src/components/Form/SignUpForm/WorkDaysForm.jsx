import React, { useState } from "react";
import WorkDayItem from "./WorkDayItem";
import toast, { Toaster } from 'react-hot-toast';

const notify = (msg) => toast(msg);

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

  function handleNext() {
    if (workDays.length < 1) {
      notify('Preencha os horários de trabalho.');
    // } else if (password !== confirmPassword) {
    //   notify('As senhas não são compatível');
    // } else if (!name || !gender) {
    //   notify('Preencha todos campos');
    // } else if (onlyNumber(phone).length < 10) {
    //   notify('Telefone incompleto.');
    // } else if (crm.length < 7) {
    //   notify('CRM incompleto.');
    } else {
      updateParent();
    }
  }

  return (
    <div className="row">
      <Toaster />
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
            onClick={handleNext}
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
