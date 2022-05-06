import React, { useState } from "react";

import { Container, Content, CoverPage } from "./style";
import submitLogin from "../../api/submitLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    submitLogin(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((result) => {
        console.log(result);
      })
  }

  return (
    <Container className="d-flex">
      <Content className="m-auto p-3 card flex-row col-6">
        <CoverPage className="d-block me-3">aaaaaaaaaaaaaaaaaaaaaaaaaaaa</CoverPage>
        <div className="w-100">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.value)} />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Senha</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.value)} />
            </div>
            <div className="form-group mt-2 d-flex">
              <button type="button" className="ms-auto btn btn-primary" onClick={handleSubmit}>
                Entrar
              </button>
            </div>
        </div>
        {/* <form onSubmit={this.handleSubmit}>
                    
                </form> */}
      </Content>
    </Container>
  );
}
