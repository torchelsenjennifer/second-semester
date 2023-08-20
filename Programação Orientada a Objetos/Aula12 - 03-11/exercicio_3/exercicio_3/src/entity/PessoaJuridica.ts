import {  Entity, Column } from "typeorm";
import { Pessoa } from "./Pessoa"

@Entity()
export class PessoaJuridica extends Pessoa{
    @Column()
    cnpj: string;
    //@column({})
    @Column()
    razaoSocial: string
}