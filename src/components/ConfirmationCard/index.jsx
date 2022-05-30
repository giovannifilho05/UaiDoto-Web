export default function ConfirmationCard() {
  return (
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
  )
}