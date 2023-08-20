import { inAxios } from "./config_axios";
import { useState, useEffect } from 'react'

import './Listagem.css'

function Listagem() {

    //declara uma variavel (vetor) e a função que irá manipular 
    // essa variável(o conteúdo inicial éo que está dentro () )
    const [rainhas, setRainhas] = useState([])
    const getRainhas = async () => {
        try {
            //indica-se o método (get) para obter os dados do server
            const lista = await inAxios.get("candidatas")
            //modifica o valor da variavel de estado (sempre pelo metodo)
            setRainhas(lista.data)
        } catch (erro) {
            console.log(`Erro no acesso ao servidor ${erro}`)
        }
    }
    //executa uma função quando o componente é renderizado
    useEffect(() => {

    }, [])
    return (
        // <h2>Vote na Candidata para Rainha da Fenadoce 2023</h2>
        <div className="container py-3">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-sm-2 row-">
                <div className="col text-center">
                    <img src="candidata.jpg" alt="candidata" className="img-fluid" />
                    <h4 className="mt-1 mb-5">{rainha.nome}</h4>
                    <h5 className="mb-5"> {rainha.clube} - {rainha.idade} anos</h5>

                </div>
            </div>
        </div>
    )
}

export default Listagem