import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Input from "../Input";
import Select from "../Select";

function testRegex(regex, input) {
  return regex.test(input);
}

export default function PersonalDataForm({ initialData, setData, handleStep }) {
  const [email, setEmail] = useState(initialData?.email || '');
  const [password, setPassword] = useState(initialData?.password || '');
  const [confirmPassword, setConfirmPassword] = useState(initialData?.password || '');
  const [name, setName] = useState(initialData?.name || '');
  const [gender, setGender] = useState(initialData?.gender || '');
  const [phone, setPhone] = useState(initialData.phone || '');
  const [crm, setCrm] = useState(initialData?.crm || '');

  // function handleNext() {
  //   if(testRegex(/(\w|\d)+@\w+\.\w+/i, email) &&
  //     testRegex(/[a-zA-Z]+/i, name) &&
  //     testRegex(/\(\d{2}\) (\d )?\d{4}-\d{4}/, phone) &&
  //     testRegex(/\w+@\w+\.\w+/i, email) &&
  //     testRegex(/\w+@\w+\.\w+/i, email) &&
  //     testRegex(/\w+@\w+\.\w+/i, email) &&
  //     testRegex(/\w+@\w+\.\w+/i, email)
  //   ) {

  //   }
  // }

  function updateParent() {
    setData({ email, password, name, gender, phone, crm });
    handleStep(1);
  }

  // s

  return (
    <div className="row">
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
        // mask={ [/\(\d{2}\) \d?\d{4}-\d{4}/] }
        id="phone"
        label="Telefone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Input
        // mask="99999-9/aa"
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
          onClick={updateParent}
          className="btn btn-primary ms-auto"
          type="button"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
