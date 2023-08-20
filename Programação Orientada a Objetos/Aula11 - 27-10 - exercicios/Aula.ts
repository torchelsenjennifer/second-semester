import { Conteudo } from "./Conteudo";
import { GenericModel } from "./GenericModel";
import { Unidade } from "./Unidade";

export class Aula extends GenericModel{
    private_conteudos: Conteudo[];
    private _unidade: Unidade;

    constructor(unidade: Unidade){
    super();
    this.unidade = unidade;
    this.private_conteudos = [];
    }
}