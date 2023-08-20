import { AppDataSource } from "./data-source"
import { Pessoa } from "./entity/Pessoa"
import { PessoaFisica} from "./entity/PessoaFisica";
import prompt from 'prompt-sync';

AppDataSource.initialize()
    .then(async () => {

        const teclado = prompt();
        console.log("1. Cadastrar pessoa fisica");
        console.log("2. Cadastrar pessoa juridica");
        console.log("3. Listar pessoa fisica");
        console.log("4. Listar pessoa juridica")

        while(true){
            const opt= +teclado("Escolha uma opção:")
            if(opt == 9){
                break;
            }
            switch(opt){
                case 1:
                    const pessoaFisica: PessoaFisica = new PessoaFisica();
                    pessoaFisica.cnh = teclado("Numero da cnh");
                    pessoaFisica.cpf = teclado("Numero do cpf");
                    pessoaFisica.idade = +teclado("Numero da cnh");
                    pessoaFisica.nome = teclado("Numero da cnh");
                    AppDataSource.manager.save(PessoaFisica)
                    break;
                case 3:
                    const pessoas = await AppDataSource.manager.find(PessoaFisica, {
                        where: { nome: "Angelo Luz"},
                    });
                    console.table(pessoas);
                    break;
                
                default:
            }
        }

}).catch(error => console.log(error))
