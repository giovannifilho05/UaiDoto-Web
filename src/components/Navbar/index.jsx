import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, HeaderLogo } from "./style";

export default function NavbarComponent() {
  const navigate = useNavigate()
  // const doctorName = 'Médico 1'

  function logOut() {
    Promise.all([
      localStorage.removeItem('token'),
      localStorage.removeItem('refreshToken')
    ])
      .then(() => navigate('/signIn'))
      .catch((err) => console.error(err))
  }

  return (
    <Navbar className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">Uai Doto</a> */}
        <HeaderLogo />
        {/* <h6 style={{color:"#444", fontWeight: "lighter"}}>Bem vindo(a) {doctorName}</h6> */}
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <button className="btn btn-outline-dark float-right" type="button"
          onClick={logOut}
        >
          Sair
        </button>
      </div>
    </Navbar>
  );
}