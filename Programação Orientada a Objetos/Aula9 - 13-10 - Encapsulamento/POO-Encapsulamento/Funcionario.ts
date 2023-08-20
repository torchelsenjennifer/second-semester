//TODO: https://abre.ai/e7r9

import { DadosPessoais } from "./DadosPessoais";
import { DadosProfissionais } from "./DadosProfissionais";
import { Jogo } from "./Jogo";

export class Funcionario {
  private _dadosPessoais: DadosPessoais;
  private _dadosProfissionais: DadosProfissionais;
  private _jogo: Jogo;

  constructor() {
    this._dadosPessoais = new DadosPessoais();
    this._dadosProfissionais = new DadosProfissionais();
    this._jogo = new Jogo();

    this._dadosPessoais.umMetodo();
    console.log(this._dadosPessoais.nome);
    this._dadosPessoais.nome = "Angelo";
  }

  /*----------------------------------------------------------------
  Quero ler dados: Crio um parâmetro
  Quero apresentar dados: Vou retornar esses dados
  */
  trabalhar(tempoEmHoras: number): void {
    this._jogo.trabalhar(tempoEmHoras);
  }
  /**
   * Método que aplica a lógica do funcionário ao tomar café
   * @returns A energia atualizada do funcionário
   */
  tomarCafe(): number {
    return this._jogo.tomarCafe();
  }

  //solicitar aumento
  solicitarAumento(): void {
    const isPromovido = this._jogo.solicitarAumento();
    if (isPromovido) {
      this._dadosProfissionais.receberAumento();
    }
  }
}
