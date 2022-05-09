import React from "react";
import { NavbarComponent } from "../../components/Navbar";
import { Container, Content } from "./style";

export default function Home() {
  return (
    <>
      <NavbarComponent />

      <Container>
        <Content>
          <div className="row pt-4">
            <h1>Home</h1>
          </div>

          <hr />
          
          <div className="row">
            <h3>Consultas esperando confirmação:</h3>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card text-center">
                <div className="card-header">Fulano</div>

                <div className="card-body">
                  <p className="m-0">Consulta: dd/mm - hh:ii</p>
                </div>

                <div className="card-footer">
                  <p>Confirmar consulta?</p>

                  <div className="row">
                    <button type="button" className="btn btn-danger col-5 ms-1">
                      <i className="fas fa-thumbs-down"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-success col-5 ms-auto me-1"
                    >
                      <i className="fas fa-thumbs-up"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="card text-center">
                <div className="card-header">Ciclano</div>

                <div className="card-body">
                  <p className="m-0">Consulta: dd/mm - hh:ii</p>
                </div>

                <div className="card-footer">
                  <p>Confirmar consulta?</p>

                  <div className="row">
                    <button type="button" className="btn btn-danger col-5 ms-1">
                      <i className="fas fa-thumbs-down"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-success col-5 ms-auto me-1"
                    >
                      <i className="fas fa-thumbs-up"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="card text-center">
                <div className="card-header">Beltrano</div>

                <div className="card-body">
                  <p className="m-0">Consulta: dd/mm - hh:ii</p>
                </div>

                <div className="card-footer">
                  <p>Confirmar consulta?</p>

                  <div className="row">
                    <button type="button" className="btn btn-danger col-5 ms-1">
                      <i className="fas fa-thumbs-down"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-success col-5 ms-auto me-1"
                    >
                      <i className="fas fa-thumbs-up"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="card text-center">
                <div className="card-header">Fulano</div>

                <div className="card-body">
                  <p className="m-0">Consulta: dd/mm - hh:ii</p>
                </div>

                <div className="card-footer">
                  <p>Confirmar consulta?</p>

                  <div className="row">
                    <button type="button" className="btn btn-danger col-5 ms-1">
                      <i className="fas fa-thumbs-down"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-success col-5 ms-auto me-1"
                    >
                      <i className="fas fa-thumbs-up"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <h3>Consultas:</h3>

            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="confirmed-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#confirmed"
                  type="button"
                  role="tab"
                  aria-controls="confirmed"
                  aria-selected="true"
                >
                  Confirmadas
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="unconfirmed-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#unconfirmed"
                  type="button"
                  role="tab"
                  aria-controls="unconfirmed"
                  aria-selected="true"
                >
                  Excluídas
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="confirmed"
                role="tabpanel"
                aria-labelledby="confirmed-tab"
              >
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col" className="col-1">
                        Dia
                      </th>
                      <th scope="col" className="col-1">
                        Hora
                      </th>
                      <th scope="col" className="col-8">
                        Nome do Paciente
                      </th>
                      <th scope="col" className="col-2">
                        Ação
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>dd/mm</th>
                      <td>hh:ii</td>
                      <td>Fulano</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          title="Cancelar consulta"
                        >
                          <i className="fa fa-calendar-xmark"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-success ms-3"
                          title="Finalizar consulta"
                        >
                          <i className="fa fa-calendar-check"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>dd/mm</th>
                      <td>hh:ii</td>
                      <td>Fulano</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          title="Cancelar consulta"
                        >
                          <i className="fa fa-calendar-xmark"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-success ms-3"
                          title="Finalizar consulta"
                        >
                          <i className="fa fa-calendar-check"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="tab-pane fade"
                id="unconfirmed"
                role="tabpanel"
                aria-labelledby="unconfirmed-tab"
              >
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col" className="col-1">
                        Dia
                      </th>
                      <th scope="col" className="col-1">
                        Hora
                      </th>
                      <th scope="col" className="col-4">
                        Nome do Paciente
                      </th>
                      <th scope="col" className="col-4">
                        Motivo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>dd/mm</th>
                      <td>hh:ii</td>
                      <td>Fulano</td>
                      <td>Você não confirmou a consulta</td>
                    </tr>
                    <tr>
                      <th>dd/mm</th>
                      <td>hh:ii</td>
                      <td>Fulano</td>
                      <td>Paciente cancelou a consulta</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
}
