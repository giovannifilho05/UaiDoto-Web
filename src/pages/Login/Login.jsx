import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


import submitLogin from "../../api/submitLogin";
import { testRegex } from "../../utils/fieldTreatment";

import { FormButton, Input } from "../../components/Form";
import { Container, Content, Logo, CoverPage } from "./style";

const notify = (msg) => toast(msg);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!testRegex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi, email)) {
      notify('Por favor, verifique o e-mail');
    } else if (!password) {
      notify('Por favor, verifique a senha');
    } else {
      submitLogin(email, password)
        .then((result) => {
          console.log(result);
          sessionStorage["token"] = result.data.token;
          sessionStorage["refreshToken"] = result.data.refreshToken;
  
          navigate("/dashboard");
        })
        .catch((result) => {
          console.log(result);
        });
    }

  }

  return (
    <Container className="d-flex">
      <Toaster />
      <Content className="m-auto p-3 card row col-6 flex-row">
        <CoverPage className="d-block col-12 col-md-4">
          <Logo />
        </CoverPage>
        <form className="my-auto col-12 col-md-8" onSubmit={handleSubmit}>
          <Input
            id="email"
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            id="password"
            type="password"
            className="mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="row mt-2">
            <div className="col-8 d-flex">
              <NavLink to="/sign-up" className="link-secondary my-auto">
                Não possui usuário? Cadastre-se
              </NavLink>
            </div>
            <div className="col">
              <FormButton
                divClass="mt-2 d-flex"
                btnClass="btn-primary ms-auto"
                type="submit"
              >
                Entrar
              </FormButton>
            </div>
          </div>
        </form>
      </Content>
    </Container>
  );
}
