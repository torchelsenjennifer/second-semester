export class DadosPessoais {
  private _nome: string;
  private _cpf: string;
  private _dataDeNascimento: Date;

  public get nome(): string {
    console.log(`O nome do usuário foi alterado em ${new Date()}`);
    return this._nome;
  }
  public umMetodo(): string {
    return "oi";
  }

  public set nome(nome: string) {
    if (nome.length < 2) {
      throw new Error();
    }
    this._nome = nome;
  }
}
