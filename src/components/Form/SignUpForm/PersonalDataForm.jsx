import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import { onlyNumber, testRegex } from "../../../utils/fieldTreatment";

import Input from "../Input";
import Select from "../Select";

const notify = (msg) => toast(msg);

export default function PersonalDataForm({ initialData, setData, handleStep }) {
  const [email, setEmail] = useState(initialData?.email || '');
  const [password, setPassword] = useState(initialData?.password || '');
  const [confirmPassword, setConfirmPassword] = useState(initialData?.password || '');
  const [name, setName] = useState(initialData?.name || '');
  const [gender, setGender] = useState(initialData?.gender || '');
  const [phone, setPhone] = useState(initialData.phone || '');
  const [crm, setCrm] = useState(initialData?.crm || '');

  function updateParent() {
    setData({ email, password, name, gender, phone: onlyNumber(phone), crm });
    handleStep(1);
  }

  function handleNext() {
    if (!testRegex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi, email)) {
      notify('Por favor, verifique o e-mail');
    } else if (password !== confirmPassword) {
      notify('As senhas não são compatível');
    } else if (!name || !gender) {
      notify('Preencha todos campos');
    } else if (onlyNumber(phone).length < 10) {
      notify('Telefone incompleto.');
    } else if (crm.length < 7) {
      notify('CRM incompleto.');
    } else {
      updateParent();
    }
  }

  return (
    <div className="row">
      <Toaster />
      <Input
        id="email"
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        id="password"
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        id="confirmPassword"
        label="Confirme a senha"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Input
        id="name"
        label="Nome"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Select
        id="gender"
        label="Sexo"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="0">Masculino</option>
        <option value="0">Feminino</option>
      </Select>

      <Input
        mask="(99) 999999999"
        id="phone"
        label="Telefone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Input
        // mask="aa99999"
        id="crm"
        label="CRM"
        value={crm}
        onChange={(e) => setCrm(e.target.value)}
      />

      <div className="mt-3 form-group d-flex">
        <NavLink to="/" className="link-secondary my-auto">
          Já possui um cadastro? Faça login
        </NavLink>

        <button
          onClick={handleNext}
          className="btn btn-primary ms-auto"
          type="button"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
