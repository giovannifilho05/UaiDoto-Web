import React, { useState } from "react";
import Input from "../Input";

export default function PersonalDataForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

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
      <Input
        id="gender"
        label="Gênero"
        type="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <Input
        id="phone"
        label="Telefone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
}
