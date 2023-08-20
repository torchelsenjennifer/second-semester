import { inAxios } from "../config_axios";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const options = {
  chart: {
    title: "Rainha da Fenadoce",
    subtitle: "Número votos das 5 primeiras colocadas"
  }
};

const GerenteCandidatas = () => {
  // declara a variável de estado e o método que irá atualizá-la
  const [gerais, setGerais] = useState(0);
  const [totalVotos, setTotalVotos] = useState(0);
  const [grafico, setGrafico] = useState(0);

  const obterDados = async () => {
    // obtém do Web Service a lista das candidatas cadastradas
    const dadosGerais = await inAxios.get("candidatas/gerais");
    const dadosTotalVotos = await inAxios.get("candidatas/total_votos");
    const votos = await inAxios.get("candidatas/votos");

    // atualiza a variável de estado
    setGerais(dadosGerais.data);
    setTotalVotos(dadosTotalVotos.data);

    const data = [["candidata", "votos"]];

    //percorre cada linha do Json e adiciona ao array
    votos.data.map((dado) => data.push([dado.nome, dado.votos]));
    setGrafico(data);
  };

  // chama yo método ao carregar o componente
  useEffect(() => {
    obterDados();
  }, []);

  return (
    <div className="container">
      <h2>Gerência do Sistema</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card border-primary text-center">
            <div className="card-header">
              <span className="badge bg-primary p-4 fs-3 fw-bold">
                {gerais.num}
              </span>
            </div>
            <div className="card-body">Nº de candidatas Inscritas</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-primary text-center">
            <div className="card-header">
              <span className="badge bg-primary p-4 fs-3 fw-bold">
                {gerais.media}
              </span>
            </div>
            <div className="card-body">Média de Idade das Candidatas</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-primary text-center">
            <div className="card-header">
              <span className="badge bg-primary p-4 fs-3 fw-bold">
                {totalVotos.total}
              </span>
            </div>
            <div className="card-body">Total de votos das Candidatas</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-primary text-center">
            <div className="card-header">
              <span className="badge bg-primary p-4 fs-3 fw-bold">
                {totalVotos.maior}
              </span>
            </div>
            <div className="card-body">Votos da Rainha</div>
          </div>
        </div>
      </div>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={grafico}
        options={options}
      />
    </div>
  );
};

export default GerenteCandidatas;
