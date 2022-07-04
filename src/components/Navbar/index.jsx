import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar } from "./style";

export default function NavbarComponent() {
  const navigate = useNavigate()

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
        <a className="navbar-brand" href="/">Uai Doto</a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="" ></NavLink>
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-dark float-right" type="button"
          onClick={logOut}
        >
          Sair
        </button>
      </div>
    </Navbar>
  );
}