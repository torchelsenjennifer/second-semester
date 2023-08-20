import { inAxios, webServiceURL } from "../config_axios";
import { useState, useEffect } from "react";

import "./ListaCandidatas.css";

const ListaCandidatas = () => {
  // declara a variável de estado e o método que irá atualizá-la
  const [candidatas, setCandidatas] = useState([]);

  const obterCandidatas = async () => {
    // obtém do Web Service a lista das candidatas cadastradas
    const lista = await inAxios.get("candidatas");

    // atualiza a variável de estado
    setCandidatas(lista.data);
  };

  // chama o método ao carregar o componente
  useEffect(() => {
    obterCandidatas();
  }, []);

  return (
    <div className="container">
      <h2>Lista das Candidatas Inscritas no Concurso</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Clube</th>
            <th>Idade</th>
            <th>Votos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {candidatas.map((cand) => (
            <tr>
              <td>
                <img
                  src={webServiceURL + cand.foto}
                  alt={cand.nome}
                  className="img-cand"
                />
              </td>
              <td>{cand.nome}</td>
              <td>{cand.clube}</td>
              <td>{cand.idade} anos</td>
              <td>{cand.votos} votos</td>
              <td className="text-center">
                <h4>
                  <i class="bi bi-pencil-square text-success"></i>
                  &ensp;
                  <i className="bi bi-person-dash-fill text-danger"></i>
                </h4>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaCandidatas;
