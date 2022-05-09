import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import submitLogin from "../../api/submitLogin";
import { FormButton, Input } from "../../components/Form";
import { Container, Content, Logo, CoverPage } from "./style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

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

  return (
    <Container className="d-flex">
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
