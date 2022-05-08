import React, { useState } from "react";
import Input from "../Input";

export default function AddressForm() {
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  return (
    <div className="row">
      <Input
        id="zipCode"
        label="CEP"
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <Input
        id="city"
        label="Cidade"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Input
        id="street"
        label="Rua"
        type="text"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <Input
        id="number"
        label="Número"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Input
        id="complement"
        label="Complemento"
        type="text"
        value={complement}
        onChange={(e) => setComplement(e.target.value)}
      />
    </div>
  );
}
