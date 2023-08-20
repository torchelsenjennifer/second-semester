export class DadosProfissionais {
  private _salario: number;
  private _dataDeAdmissao: Date;
  private _cargo: string;

  public receberAumento() {
    this._salario = this._salario * 1.5;
  }
}
