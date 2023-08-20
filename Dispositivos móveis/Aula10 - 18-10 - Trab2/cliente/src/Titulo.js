import './Titulo.css'

function Titulo() {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="row align-items-center">
        <div className="col-sm-4 col-md-3 text-center">
          <img src="sol.png" alt="Logo da agencia" className="logo" />
        </div>
        <div className="col-sm-8 col-md-6 text-center">
          <h1>Pôr do Sol Turismo</h1>          
        </div>
        <div className="col-sm-12 col-md-3 text-center">
          <h3>Black Friday 2022, é aqui!</h3>
        </div>
      </div>
    </div>
  )
}

export default Titulo