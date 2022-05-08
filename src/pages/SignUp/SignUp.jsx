import React, { useState } from "react";
import { Container, Content } from "./style";
import {
  AddressForm,
  PersonalDataForm,
  WorkDaysForm,
} from "../../components/Form/SignUpForm";

export default function SignUp() {
  const [step, setStep] = useState(0);

  return (
    <Container>
      <Content>
        <div className="card col-8 mx-auto my-5">
          <div className="card-body">
            <div className="row">
              <h1 className="text-center">Faça seu cadastro</h1>
            </div>

            <div className="row">
              <form className="w-100">
                {step === 0 && <PersonalDataForm />}

                {step === 1 && <AddressForm />}

                {step === 2 && <WorkDaysForm />}

                <div className="mt-3 form-group d-flex">
                  {step !== 0 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="btn btn-outline-dark"
                      type="button"
                    >
                      Voltar
                    </button>
                  )}

                  {step !== 2 && (
                    <button
                      onClick={() => setStep(step + 1)}
                      className="btn btn-primary ms-auto"
                      type="button"
                    >
                      Próximo
                    </button>
                  )}

                  {step === 2 && (
                    <button
                      className="btn btn-success ms-auto"
                      type="submit"
                    >
                      Cadastrar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}
