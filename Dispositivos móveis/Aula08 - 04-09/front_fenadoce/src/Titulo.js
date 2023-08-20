import './Titulo.css'
function Titulo() {
    return (
        <div className="container-fluid bg-primary text-white">
            {/* </div> <h1>Concurso Rainha da Fenadoce</h1> */}
            <div className="row align-items-center">
                <div className="col-sm-4 col-md-3 text-center">
                    <img scr="formiga.png" alt="Logo da Fenadoce" className="logo" />
                </div>
                <div className="col-sm-8 col-md-6 text-center">
                    <h1>Rainha da Fenadoce</h1>
                </div>
                <div className="col-sm-12 col-md-3 text-center">
                    <h3>Edição 2023</h3>
                </div>
            </div>
        </div>
    )
}
export default Titulo