import "reflect-metadata"
import { DataSource } from "typeorm"
import { Pessoa } from "./entity/Pessoa"
import { PessoaFisica } from "./entity/PessoaFisica"
import { PessoaJuridica } from "./entity/PessoaJuridica"


export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Pessoa, PessoaFisica, PessoaJuridica],
    migrations: [],
    subscribers: [],
})
