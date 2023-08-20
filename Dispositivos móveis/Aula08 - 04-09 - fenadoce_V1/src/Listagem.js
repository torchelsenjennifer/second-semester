import { inAxios, webServiceURL } from "./config_axios";
import { useState, useEffect } from 'react'

import './Listagem.css'

function Listagem() {

  // declara uma variável (vetor) e a função que irá manipular
  // essa variável (o conteúdo inicial é o que está dentro () )
  const [rainhas, setRainhas] = useState([])

  const getRainhas = async () => {
    try {
      // indica-se o método (get) para obter os dados do server
      const lista = await inAxios.get("candidatas")
      // modifica o valor da variável de estado (sempre pelo método)
      setRainhas(lista.data)
    } catch (erro) {
      console.log(`Erro no acesso ao Servidor ${erro}`)
    }
  }

  // executa uma função quando o componente é renderizado
  useEffect(() => {
    getRainhas()
  }, [])

  return (
    <div className="container py-3">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {rainhas.map((rainha) => (
          <div className="col text-center">
            <img src={`${webServiceURL}${rainha.foto}`} alt="Candidata" className="img-fluid" />
            <h4 className="mt-1">{rainha.nome}</h4>
            <h5 className="mb-5">{rainha.clube} - {rainha.idade} anos</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Listagem