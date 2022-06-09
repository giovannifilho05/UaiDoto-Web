import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import { Container, Content } from "./style";
import {
  AddressForm,
  PersonalDataForm,
  WorkDaysForm,
} from "../../components/Form/SignUpForm";

import signUp from "../../api/signUp";

const notify = (msg) => toast(msg);

export default function SignUp() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  function handleData(data) {
    setFormData({ ...formData, ...data });
  }

  function handleStep(stepDirection) {
    if (typeof stepDirection === "number") {
      if (step + stepDirection >= 0) {
        setStep(step + stepDirection);
      }
    }
  }

  function handleSubmit() {
    signUp(formData)
      .then((success) => {
        console.log(success);

        if (success.status === 201) {
          notify("Cadastro realizado com sucesso!")

          navigate("/SignIn")
        }
      })
      .catch((err) => {
        notify("Algo deu errado :(");
        console.log(err)
      })
  }

  return (
    <Container>
      <Content>
        <div className="card col-8 mx-auto my-5">
          <div className="card-body">
            <div className="row">
              <h1 className="text-center">Faça seu cadastro</h1>
            </div>

            <div className="row">
              <Toaster />
              <form className="w-100">
                {step === 0 && (
                  <PersonalDataForm
                    initialData={formData}
                    setData={handleData} 
                    handleStep={handleStep} />
                )}

                {step === 1 && (
                  <AddressForm initialData={formData} setData={handleData} handleStep={handleStep} />
                )}

                {step === 2 && (
                  <WorkDaysForm initialData={formData} setData={handleData} handleStep={handleStep} handleSubmit={handleSubmit} />
                )}
              </form>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}
