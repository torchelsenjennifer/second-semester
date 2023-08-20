import { Curso } from "./Curso";
import { GenericModel } from "./GenericModel";
import { Aula } from "./GenericModel";

export class Unidade extends GenericModel{
    private _ativo: boolean;
    private _cursos: Curso[];
    private _aulas: Aula[];

    constructor(curso: Curso, aulas: Aula[]= []){
        super();
        this._ativo = false;
        this._cursos = [curso];
        this._aulas = aulas;
    }
    unidade: Unidade = new Unidade(new Curso());
}