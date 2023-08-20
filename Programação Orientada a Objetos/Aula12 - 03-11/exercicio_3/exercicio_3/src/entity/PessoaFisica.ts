import {  Entity, Column } from "typeorm";
import { Pessoa } from "./Pessoa"

@Entity()
export class PessoaFisica extends Pessoa{
    @Column()
    cpf: string;
    @Column()
    cnh: string
}