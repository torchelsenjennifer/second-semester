import { GenericModel } from "./GenericModel"
import { Unidade } from "./Unidade"

export class Curso extends GenericModel{
    private _unidade: Unidade[];

    constructor(unidade: Unidade){
        super();
        this._unidades = [unidade];
    }
}