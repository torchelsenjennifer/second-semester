
export class Pessoa {

    protected _nome: string;
    protected _cpf: string;
    protected _endereco: string;
    protected _estadoCivil: string;

    constructor(nome: string, cpf:string) {
        this._nome = nome;
        this._cpf = cpf;
        this._endereco = "";
        this._estadoCivil = "";
    }
}