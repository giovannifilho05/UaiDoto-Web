import React, { useState } from "react";
import Input from "../Input";
import toast, { Toaster } from 'react-hot-toast';

import { onlyNumber, testRegex } from "../../../utils/fieldTreatment";

const notify = (msg) => toast(msg);

export default function AddressForm({ initialData, setData, handleStep }) {
  const [zipCode, setZipCode] = useState(initialData?.address?.zipCode || '');
  const [city, setCity] = useState(initialData?.address?.city || '');
  const [street, setStreet] = useState(initialData?.address?.street || '');
  const [number, setNumber] = useState(initialData?.address?.number || '');
  const [complement, setComplement] = useState(initialData?.address?.complement || '');

  function updateParent() {
    setData({ address: {
      zipCode: zipCode, 
      city, 
      street, 
      number, 
      complement
    } });
    handleStep(1);
  }

  function handleNext() {
    if ( onlyNumber(zipCode).length < 8) {
      notify('CEP incorreto');
    } else if (!city || !street || !number || !complement) {
      notify('Preencha todos campos');
     } else {
      updateParent();
    }
  }

  return (
    <div className="row">
      <Toaster />
      <Input
        mask="99999-999"
        minlength="9"
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
      <div className="mt-3 form-group d-flex">
        <button onClick={() => handleStep(-1)} className="btn btn-outline-dark" type="button">
          Voltar
        </button>

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
