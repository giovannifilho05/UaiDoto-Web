import React, { useState } from "react";

import { Container, Content, CoverPage } from "./style";
import submitLogin from "../../api/submitLogin";
import { FormButton, Input } from "../../components/Form";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    submitLogin(email, password)
      .then((result) => {
        console.log(result);
        localStorage["token"] = result.data.token;
        localStorage["refreshToken"] = result.data.refreshToken;
      })
      .catch((result) => {
        console.log(result);
      })
  }

  return (
    <Container className="d-flex">
      <Content className="m-auto p-3 card flex-row col-6">
        <CoverPage className="d-block me-3">aaaaaaaaaaaaaaaaaaaaaaaaaaaa</CoverPage>
        <form className="w-100" onSubmit={ handleSubmit }>
          <Input 
            id="email" 
            label="E-mail" 
            type="email" 
            value={ email } 
            onChange={ (e) => setEmail(e.target.value) }
          />
          
          <Input
            label="Senha"
            id="password"
            type="password"
            className="mt-2" 
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />

          <FormButton 
            divClass="mt-2 d-flex" 
            btnClass="btn-primary ms-auto" 
            type="submit"
          >
            Entrar
          </FormButton>
        </form>
      </Content>
    </Container>
  );
}
