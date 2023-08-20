import { inAxios, webServiceURL } from "./config_axios";
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './Listagem.css'

function Listagem() {

  // declara uma variável (vetor) e a função que irá manipular
  // essa variável (o conteúdo inicial é o que está dentro () )
  const [excursoes, setExcursao] = useState([])
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [destino, setDestino] = useState("");
  const [foto, setFoto] = useState("");
  const [data_chegada, setDataChegada] = useState(0);
  const [data_partida, setDataPartida] = useState(0);
  const [nomeCli, setNomeCli] = useState("");
  const [emailCli, setEmailCli] = useState("");
  const [telefoneCli, setTelefoneCli] = useState("");
  const [dataNascimentoCli, setDataNascimentoCli] = useState("");
  const [poltronaCli, setPoltronaCli] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id, destino, foto, data_chegada, data_partida) => {
    setId(id)
    setDestino(destino)
    setFoto(webServiceURL + foto)
    setDataChegada(data_chegada)
    setDataPartida(data_partida)

    setShow(true);
  }

  const getExcursao = async () => {
    try {
      // indica-se o método (get) para obter os dados do server
      const lista = await inAxios.get("excursao")
      // modifica o valor da variável de estado (sempre pelo método)
      setExcursao(lista.data)
    } catch (erro) {
      console.log(`Erro no acesso ao Servidor ${erro}`)
    }
  }

  // executa uma função quando o componente é renderizado
  useEffect(() => {
    getExcursao()
  }, [])

  // verifica se os dados foram preenchidos e os envia para o Web Service
  const fazerReserva = async () => {

    if (nomeCli === "" || emailCli === "" || telefoneCli === "" || dataNascimentoCli === "") {
      alert("Por favor, informe os dados para realizar sua reserva.")
      return
    }

    try {
      // indica-se o método (post) para enviar os dados para o server
      // {
      //   "id_excursao": 5,
      //   "poltrona": 16,
      //   "nome": "Fabio",
      //   "telefone":53981214579,
      //   "data_nascimento": "15/11/10",
      //   "email": "fabio@gmail.com"
      // }

      const reserva = await inAxios.post("reserva", {
        id_excursao: id,
        nome: nomeCli,
        email: emailCli,
        telefone: telefoneCli,
        data_nascimento: dataNascimentoCli,
        poltrona: poltronaCli
      })
      // exibe a mensagem retornada pelo Web Service
      alert(reserva.data.msg)
    } catch (erro) {
      console.log(`Erro no acesso ao Servidor ${erro}`)
    }

    // limpa os campos do formulário
    setNomeCli("")
    setEmailCli("")
    setTelefoneCli("")
    dataNascimentoCli("")
    poltronaCli("")

    // fecha a janela modal
    setShow(false)
  }

  return (
    <div className="container py-3">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {excursoes.map((excursao) => (
          <div className="col">
            <img src={`${webServiceURL}${excursao.foto}`} alt="Excursão" className="w-100 img-fluid" />
            <h4 className="mt-1">{excursao.destino}
              <button className="btn btn-primary fw-bold py-2 px-4 float-end"
                onClick={() => handleShow(excursao.id, excursao.destino, excursao.foto, excursao.data_chegada, excursao.data_partida)}>
                Reservar
              </button>
            </h4>
            <h5 className="mb-5">{excursao.data_partida}</h5>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Informações da compra da Passagem:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div>
                  <h4 className="text-primary mt-5">Informações da Viagem:</h4>
                  <h4 className="mt-1">{destino}</h4>
                </div>
                <div>
                  <img src={foto} alt={destino} className="img-fluid" />
                </div>
                <h5 className="mb-5">Data e Horário de partida: {data_partida}</h5>
                <div>
                  <h5 className="mb-5">Data e Horário de Chegada: {data_chegada}</h5>
                </div>
                
              </div>
              <div className="col-6">
                {/* <h2>{nome}</h2>
                <h5>Idade: {idade} anos</h5> */}
                {/* <h5>Altura: 1.72mt</h5> */}
                {/* <h5>Slogan: <span className="fst-italic">""</span></h5> */}
                <h4 className="text-primary mt-5">Informe seus dados:</h4>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingName" placeholder="Nome"
                    value={nomeCli} onChange={(e) => setNomeCli(e.target.value)} />
                  <label for="floatingName">Nome completo</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingName" placeholder="Telefone"
                    value={telefoneCli} onChange={(e) => setTelefoneCli(e.target.value)} />
                  <label for="floatingName">Telefone</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="date" class="form-control" id="floatingEmail"
                    value={dataNascimentoCli} onChange={(e) => setDataNascimentoCli(e.target.value)} />
                  <label for="floatingEmail">Data de Nacimento</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingEmail" placeholder="E-mail"
                    value={emailCli} onChange={(e) => setEmailCli(e.target.value)} />
                  <label for="floatingEmail">E-mail para contato</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingName" placeholder="22"
                    value={poltronaCli} onChange={(e) => setPoltronaCli(e.target.value)} />
                  <label for="floatingName">Poltrona</label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          {<Button variant="primary" onClick={fazerReserva}>
            Fazer Reserva
          </Button>}
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Listagem